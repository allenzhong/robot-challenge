import Parser from '../src/parser';
import TableTop from '../src/models/table-top';
jest.mock('../src/models/table-top');

const TableTopMock = TableTop as jest.MockedClass<typeof TableTop>;
describe('Parse', () => {
  describe('parse', () => {
    let tableTop: TableTop;
    beforeEach(() => {
      tableTop = new TableTopMock();
      TableTopMock.mockClear();
    });

    it('PLACE when position is valid', () => {
      jest.spyOn(tableTop, 'isPositionValid').mockReturnValue(true);
      const parser = new Parser(tableTop);
      parser.parse('PLACE 0,0,NORTH');
      expect(tableTop.placeRobot).toBeCalledWith(0, 0, 'NORTH');
    });

    it('PLACE when position is invalid', () => {
      jest.spyOn(tableTop, 'isPositionValid').mockReturnValue(false);
      const parser = new Parser(tableTop);
      parser.parse('PLACE 0,0,NORTH');
      expect(tableTop.placeRobot).not.toBeCalled();
    });

    it('MOVE', () => {
      const parser = new Parser(tableTop);
      parser.parse('MOVE');
      expect(tableTop.moveRobot).toBeCalled();
    });

    it('LEFT', () => {
      const parser = new Parser(tableTop);
      parser.parse('LEFT');
      expect(tableTop.turnRobotLeft).toBeCalled();
    });
    
    it('RIGHT', () => {
      const parser = new Parser(tableTop);
      parser.parse('RIGHT');
      expect(tableTop.turnRobotRight).toBeCalled();
    });

    it('REPORT', () => {
      const parser = new Parser(tableTop);
      parser.parse('REPORT');
      expect(tableTop.report).toBeCalled();
    });

    it('Invalid command', () => {
      const parser = new Parser(tableTop);
      parser.parse('INVALID');
      expect(tableTop.report).not.toBeCalled();
    });
  });
});
