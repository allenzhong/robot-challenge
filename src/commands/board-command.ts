import { AbstractCommand } from './abstract-command';

export class BoardCommand extends AbstractCommand {
  execute(): void {
    this._tableTop.showBoard();
  }
}
