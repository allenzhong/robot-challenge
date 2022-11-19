import InvalidArgumentError from '../errors/invalid-arguments';
import { Orientation } from '../models/robot';
import { AbstractCommand } from './abstract-command';

export class PlaceCommand extends AbstractCommand {
  execute(args?: string[] | undefined): void {
    if (args === undefined || args.length !== 1) {
      throw new InvalidArgumentError("Place command's arguments invalid");
    }

    const [x, y, orientation] = args[0].split(',');

    if (!this.validateArgs(x, y, orientation)) {
      throw new InvalidArgumentError('Place command or arguments invalid');
    }

    if (this._tableTop.isPositionValid(Number(x), Number(y))) {
      this._tableTop.placeRobot(
        Number(x),
        Number(y),
        orientation as Orientation,
      );
    }
  }

  private validateArgs(x: string, y: string, orientation: string) {
    return (
      Number.isInteger(Number(x)) &&
      Number.isInteger(Number(y)) &&
      orientation in Orientation
    );
  }
}
