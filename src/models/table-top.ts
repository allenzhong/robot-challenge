import InvalidPositionError from '../errors/invalid-position';
import BoardMap from '../utils/board-map';
import { Orientation } from './orientation';
import Position from './position';
import Robot from './robot';

export default class TableTop {
  private _robot: Robot | undefined;

  constructor(private _width: number = 5, private _height: number = 5) {}

  public placeRobot(x: number, y: number, orientation: Orientation) {
    if (!this.isPositionValid(x, y)) {
      throw new InvalidPositionError('Robot placed on an invalid position.');
    }

    this._robot = new Robot(new Position(x, y), orientation);
  }

  public get robot(): Robot | undefined {
    return this._robot;
  }

  public report() {
    if (this._robot) {
      return `Output: ${this._robot.position.x},${this._robot.position.y},${this._robot.orientation}`;
    } else {
      return 'Output: No robot is placed on the table top';
    }
  }

  public moveRobot() {
    if (!this._robot) return;

    const nextMove = this._robot.predictNextMove();
    if (this.isPositionValid(nextMove.x, nextMove.y)) {
      this._robot.move();
    }
  }

  public turnRobotLeft() {
    if (this._robot) {
      this._robot.turnLeft();
    }
  }

  public turnRobotRight() {
    if (this._robot) {
      this._robot.turnRight();
    }
  }

  public isPositionValid(x: number, y: number) {
    return x >= 0 && x < this._width && y >= 0 && y < this._height;
  }

  public showBoard() {
    if (this._robot) {
      const board = new BoardMap();
      board.showBoardMap(this._robot);
    }
  }
}
