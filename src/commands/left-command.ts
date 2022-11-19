import { AbstractCommand } from './abstract-command';

export class LeftCommand extends AbstractCommand {
  execute(): void {
    this._tableTop.turnRobotLeft();
  }
}
