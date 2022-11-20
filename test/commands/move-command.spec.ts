import { MoveCommand } from '../../src/commands/move-command';
import TableTop from '../../src/models/table-top';

jest.mock('../../src/models/table-top');

const TableTopMock = TableTop as jest.MockedClass<typeof TableTop>;

describe('MoveCommand', () => {
  let tableTop: TableTop;

  beforeEach(() => {
    tableTop = new TableTopMock();
    TableTopMock.mockClear();
  });
  
  describe('execute', () => {
    it('should move the robot', () => {
      jest.spyOn(tableTop, 'moveRobot');
      const moveCommand = new MoveCommand(tableTop, 'MOVE');
      moveCommand.execute();
      expect(tableTop.moveRobot).toHaveBeenCalled();
    });
  });
});
