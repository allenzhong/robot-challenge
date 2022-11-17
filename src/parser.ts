import { Command } from './models/command';
import { Orientation } from './models/robot';
import TableTop from './models/table-top';

export default class Parser {
  private _tableTop: TableTop;

  constructor(tableTop: TableTop) {
    this._tableTop = tableTop;
  }

  public parse(input: string) {
    const [command, ...args] = input.split(' ');
    switch (command) {
      case Command.PLACE:
        this._placeRobot(args[0]);
        break;
      case Command.MOVE:
        this._moveRobot();
        break;
      case Command.LEFT:
        this._turnRobotLeft();
        break;
      case Command.RIGHT:
        this._turnRobotRight();
        break;
      case Command.REPORT:
        console.log(this._tableTop.report());
        break;
      default:
        console.log('Invalid command');
    }
  }

  private _placeRobot(args: string) {
    const [x, y, orientation] = args.split(',');
    if (this._tableTop.isPositionValid(Number(x), Number(y))) {
      this._tableTop.placeRobot(
        Number(x),
        Number(y),
        orientation as Orientation,
      );
    }
  }

  private _moveRobot() {
    this._tableTop.moveRobot();
  }

  private _turnRobotLeft() {
    this._tableTop.turnRobotLeft();
  }

  private _turnRobotRight() {
    this._tableTop.turnRobotRight();
  }
}
