import { AbstractCommand } from './abstract-command';

export class MoveCommand extends AbstractCommand {
  execute(): void {
    this._tableTop.moveRobot();
  }
}
