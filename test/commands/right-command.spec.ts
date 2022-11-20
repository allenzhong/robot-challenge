import { RightCommand } from '../../src/commands/right-command';
import TableTop from '../../src/models/table-top';

jest.mock('../../src/models/table-top');

const TableTopMock = TableTop as jest.MockedClass<typeof TableTop>;

describe('RightCommand', () => {
  let tableTop: TableTop;
  beforeEach(() => {
    tableTop = new TableTopMock();
    TableTopMock.mockClear();
  });
  describe('execute', () => {
    it('should turn the robot right', () => {
      jest.spyOn(tableTop, 'turnRobotRight');
      const rightCommand = new RightCommand(tableTop, 'RIGHT');
      rightCommand.execute();
      expect(tableTop.turnRobotRight).toHaveBeenCalled();
    });
  });
});
