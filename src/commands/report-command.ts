import { AbstractCommand } from './abstract-command';

export class ReportCommand extends AbstractCommand {
  execute(): void {
    const report = this._tableTop.report();
    console.log(report);
  }
}
