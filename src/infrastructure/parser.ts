import Printer from '../utils/printer';
import TableTop from '../models/table-top';
import CommandFactory from './command-factory';
import Dispatcher from './dispatcher';
import InvalidCommandError from '../errors/invalid-command';

export default class Parser {
  private commandFactory: CommandFactory;
  private dispatcher: Dispatcher;
  private printer: Printer = new Printer(Parser.name);

  constructor(private readonly tableTop: TableTop) {
    this.commandFactory = new CommandFactory(this.tableTop);
    this.dispatcher = new Dispatcher();
  }

  public parse(input: string) {
    try {
      const command = this.commandFactory.getCommand(input);
      this.dispatcher.dispatch(command, input);
    } catch (e) {
      if (e instanceof InvalidCommandError) {
        this.printer.printError(`Invalid command: ${input}`);
      } else {
        this.printer.printError((e as Error).message);
      }
    }
  }
}
