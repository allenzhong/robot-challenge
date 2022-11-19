import TableTop from '../models/table-top';

export abstract class AbstractCommand {
  constructor(protected readonly _tableTop: TableTop, protected readonly _input: string) {}
  abstract execute(args?: string[]): void;
}
