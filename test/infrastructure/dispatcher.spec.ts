import { MoveCommand } from '../../src/commands/move-command';
import Dispatcher from '../../src/infrastructure/dispatcher';
import TableTop from '../../src/models/table-top';

jest.mock('../../src/commands/move-command');

const CommandMock = MoveCommand as jest.MockedClass<typeof MoveCommand>;

describe('Dispatcher', () => {
  describe('dispatch', () => {

    it('should dispatch the place command', () => {
      const tableTop = new TableTop();
      const command = new CommandMock(tableTop, 'PLACE 0,0,NORTH');
      const dispatcher = new Dispatcher();
      dispatcher.dispatch(command, 'PLACE 0,0,NORTH');
      expect(command.execute).toHaveBeenCalledWith(['0,0,NORTH']);
    });

    it('should dispatch the move command', () => {
      const tableTop = new TableTop();
      const command = new CommandMock(tableTop, 'MOVE');
      const dispatcher = new Dispatcher();
      dispatcher.dispatch(command, 'MOVE');
      expect(command.execute).toHaveBeenCalled();
    });

    it('should dispatch the left command', () => {
      const tableTop = new TableTop();
      const command = new CommandMock(tableTop, 'LEFT');
      const dispatcher = new Dispatcher();
      dispatcher.dispatch(command, 'LEFT');
      expect(command.execute).toHaveBeenCalled();
    });

    it('should dispatch the right command', () => {
      const tableTop = new TableTop();
      const command = new CommandMock(tableTop, 'RIGHT');
      const dispatcher = new Dispatcher();
      dispatcher.dispatch(command, 'RIGHT');
      expect(command.execute).toHaveBeenCalled();
    });

    it('should dispatch the report command', () => {
      const tableTop = new TableTop();
      const command = new CommandMock(tableTop, 'REPORT');
      const dispatcher = new Dispatcher();
      dispatcher.dispatch(command, 'REPORT');
      expect(command.execute).toHaveBeenCalled();
    });
  });
});
