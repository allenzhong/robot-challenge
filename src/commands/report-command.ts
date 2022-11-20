import TableTop from '../models/table-top';
import Printer from '../utils/printer';
import { AbstractCommand } from './abstract-command';

export class ReportCommand extends AbstractCommand {
  public _printer: Printer;
  
  public get printer() {
    return this._printer;
  }

  constructor(tableTop: TableTop, input: string) {
    super(tableTop, input);
    this._printer = new Printer(ReportCommand.name);
  }
  
  execute(): void {
    const report = this._tableTop.report();
    this.printer.report(report);
  }
}
