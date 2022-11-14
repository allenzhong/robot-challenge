import Board from './board';
import Position from './position';
import Robot, { Orientation } from './robot';

export default class TableTop {
  private _board: Board;
  private _robot: Robot | undefined;

  constructor() {
    this._board = new Board();
  }

  public placeRobot(x: number, y: number, orientation: Orientation) {
    this._robot = new Robot(new Position(x, y), orientation);
  }

  public get robot(): Robot | undefined {
    return this._robot;
  }

  public get board(): Board {
    return this._board;
  }

  public report() {
    if (this._robot) {
      return `Output: ${this._robot.position.x},${this._robot.position.y},${this._robot.orientation}`;
    } else {
      return 'Output: No robot is placed on the table top';
    }
  }
}
