import { AbstractCommand } from './abstract-command';

export class RightCommand extends AbstractCommand {
  execute(): void {
    this._tableTop.turnRobotRight();
  }
}
