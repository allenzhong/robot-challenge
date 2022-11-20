import { LeftCommand } from '../../src/commands/left-command';
import TableTop from '../../src/models/table-top';

jest.mock('../../src/models/table-top');

const TableTopMock = TableTop as jest.MockedClass<typeof TableTop>;

describe('LeftCommand', () => {
  let tableTop: TableTop;

  beforeEach(() => {
    tableTop = new TableTopMock();
    TableTopMock.mockClear();
  });
  
  describe('execute', () => {
    it('should turn the robot left', () => {
      jest.spyOn(tableTop, 'turnRobotLeft');
      const leftCommand = new LeftCommand(tableTop, 'LEFT');
      leftCommand.execute();
      expect(tableTop.turnRobotLeft).toHaveBeenCalled();
    });
  });
});
