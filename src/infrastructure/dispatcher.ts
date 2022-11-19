import { CommandName } from '../commands/commandName';
import { AbstractCommand } from '../commands/abstract-command';

export default class Dispatcher {
  dispatch(command: AbstractCommand, input: string) {
    const [commandName, ...args] = input.split(' ');
    if (commandName in CommandName) {
      command.execute(args);
    }
  }
}
