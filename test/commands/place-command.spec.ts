import { PlaceCommand } from '../../src/commands/place-command';
import TableTop from '../../src/models/table-top';

jest.mock('../../src/models/table-top');

const TableTopMock = TableTop as jest.MockedClass<typeof TableTop>;

describe('PlaceCommand', () => {
  let tableTop: TableTop;
  beforeEach(() => {
    tableTop = new TableTopMock();
    TableTopMock.mockClear();
  });
  describe('execute', () => {
    it('should place the robot when position is valid', () => {
      jest.spyOn(tableTop, 'isPositionValid').mockReturnValue(true);
      jest.spyOn(tableTop, 'placeRobot');
      const placeCommand = new PlaceCommand(tableTop, 'PLACE 0,0,NORTH');
      placeCommand.execute(['0,0,NORTH']);
      expect(tableTop.placeRobot).toHaveBeenCalledWith(0, 0, 'NORTH');
    });

    it('should not place the robot when position is not valid', () => {
      jest.spyOn(tableTop, 'isPositionValid').mockReturnValue(false);
      jest.spyOn(tableTop, 'placeRobot');
      const placeCommand = new PlaceCommand(tableTop, 'PLACE 6,0,NORTH');
      placeCommand.execute(['6,0,NORTH']);
      expect(tableTop.placeRobot).not.toHaveBeenCalled();
    });
   
    describe('should throw InvalidArgumentError if args are invalid ', () => {
      it('when args are empty', () => {
        const placeCommand = new PlaceCommand(tableTop, 'PLACE');
        expect(() => placeCommand.execute([])).toThrowError("Place command's arguments invalid");
      });

      it('when positions of args are not numeric', () => {
        const placeCommand = new PlaceCommand(tableTop, 'PLACE');
        expect(() => placeCommand.execute(['x,0,NORTH'])).toThrowError("Place command's arguments invalid");
        expect(() => placeCommand.execute(['0,x,NORTH'])).toThrowError("Place command's arguments invalid");
      });
      it('when oretation of args are not valid', () => {
        const placeCommand = new PlaceCommand(tableTop, 'PLACE');
        expect(() => placeCommand.execute(['0,0,ORTH'])).toThrowError("Place command's arguments invalid");
      });
    });
  });
});
