import InvalidCommandError from '../errors/invalid-command';
import { CommandName } from '../commands/commandName';
import TableTop from '../models/table-top';
import { AbstractCommand } from '../commands/abstract-command';
import { LeftCommand } from '../commands/left-command';
import { MoveCommand } from '../commands/move-command';
import { PlaceCommand } from '../commands/place-command';
import { ReportCommand } from '../commands/report-command';
import { RightCommand } from '../commands/right-command';

export type CommandFactoryFn = (
  tableTop: TableTop,
  input: string,
) => AbstractCommand;

export default class CommandFactory {
  private _commands: Map<string, CommandFactoryFn> = new Map<
    CommandName,
    CommandFactoryFn
  >();

  constructor() {
    this.initMapping();
  }

  private initMapping() {
    this._commands.set(CommandName.PLACE, this.composeCommandFn(PlaceCommand));
    this._commands.set(CommandName.MOVE, this.composeCommandFn(MoveCommand));
    this._commands.set(CommandName.LEFT, this.composeCommandFn(LeftCommand));
    this._commands.set(CommandName.RIGHT, this.composeCommandFn(RightCommand));
    this._commands.set(
      CommandName.REPORT,
      this.composeCommandFn(ReportCommand),
    );
  }

  public getCommand(tableTop: TableTop, input: string): AbstractCommand {
    const [command] = input.split(' ');
    const commandFn = this._commands.get(command);
    if (commandFn) {
      return commandFn(tableTop, input);
    }
    throw new InvalidCommandError('Invalid command');
  }

  private composeCommandFn<AbstractCommand>(commandType: {
    new (tableTop: TableTop, input: string): AbstractCommand;
  }) {
    const fn = (tableTop: TableTop, input: string) => new commandType(tableTop, input);
    return fn;
  }
}
