import Parser from '../src/parser';
import TableTop from '../src/models/table-top';
jest.mock('../src/models/table-top');

const TableTopMock = TableTop as jest.MockedClass<typeof TableTop>;
describe('Parse', () => {
  describe('parse commands', () => {
    let tableTop: TableTop;
    beforeEach(() => {
      tableTop = new TableTopMock();
      TableTopMock.mockClear();
    });

    describe('PLACE', () => {
      it('when position is valid', () => {
        jest.spyOn(tableTop, 'isPositionValid').mockReturnValue(true);
        const parser = new Parser(tableTop);
        parser.parse('PLACE 0,0,NORTH');
        expect(tableTop.placeRobot).toBeCalledWith(0, 0, 'NORTH');
      });

      it('when position is invalid', () => {
        jest.spyOn(tableTop, 'isPositionValid').mockReturnValue(false);
        const parser = new Parser(tableTop);
        parser.parse('PLACE 0,0,NORTH');
        expect(tableTop.placeRobot).not.toBeCalled();
      });

      //TODO: use output module to test instead
      it('throw error when position args(not number) are invalid', () => {
        jest.spyOn(tableTop, 'isPositionValid').mockReturnValue(true);
        const parser = new Parser(tableTop);
        expect(() => parser.parse('PLACE x,s,NORTH')).toThrowError(
          'Place command or arguments invalid',
        );
        expect(tableTop.placeRobot).not.toBeCalled();
      });

      it('throw error when position args(orientation wrong) are invalid', () => {
        jest.spyOn(tableTop, 'isPositionValid').mockReturnValue(true);
        const parser = new Parser(tableTop);
        expect(() => parser.parse('PLACE 0,1,ORTH')).toThrowError(
          'Place command or arguments invalid',
        );
        expect(tableTop.placeRobot).not.toBeCalled();
      });
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
