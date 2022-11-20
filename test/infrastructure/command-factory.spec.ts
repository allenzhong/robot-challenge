import { LeftCommand } from '../../src/commands/left-command';
import { MoveCommand } from '../../src/commands/move-command';
import { PlaceCommand } from '../../src/commands/place-command';
import { ReportCommand } from '../../src/commands/report-command';
import { RightCommand } from '../../src/commands/right-command';
import CommandFactory from '../../src/infrastructure/command-factory';
import TableTop from '../../src/models/table-top';

describe('CommandFactory', () => {
  let tableTop: TableTop;
  let commandFactory: CommandFactory;
  beforeEach(() => {
    tableTop = new TableTop();
    commandFactory = new CommandFactory();
  });
  it('should create a PlaceCommand', () => {
    const command = commandFactory.getCommand(tableTop, 'PLACE 0,0,NORTH');
    expect(command instanceof PlaceCommand).toBe(true);
  });

  it('should create a MoveCommand', () => {
    const command = commandFactory.getCommand(tableTop, 'MOVE');
    expect(command instanceof MoveCommand).toBe(true);
  });

  it('should create a LeftCommand', () => {
    const command = commandFactory.getCommand(tableTop, 'LEFT');
    expect(command instanceof LeftCommand).toBe(true);
  });

  it('should create a RightCommand', () => {
    const command = commandFactory.getCommand(tableTop, 'RIGHT');
    expect(command instanceof RightCommand).toBe(true);
  });

  it('should create a ReportCommand', () => {
    const command = commandFactory.getCommand(tableTop, 'REPORT');
    expect(command instanceof ReportCommand).toBe(true);
  });

  it('should throw an error when command is invalid', () => {
    expect(() => commandFactory.getCommand(tableTop, 'INVALID')).toThrowError(
      'Invalid command',
    );
  });
});
