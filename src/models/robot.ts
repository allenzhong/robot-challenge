import Position from './position';

export enum Orientation {
  NORTH = 'NORTH',
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
}

export default class Robot {
  private _position: Position;
  private _orientation: Orientation;

  constructor(position: Position, orientation: Orientation) {
    this._position = position;
    this._orientation = orientation;
  }

  public get position(): Position {
    return this._position;
  }

  public setPosition(x: number, y: number) {
    this._position.x = x;
    this._position.y = y;
  }

  public set orientation(orientation: Orientation) {
    this._orientation = orientation;
  }

  public get orientation(): Orientation {
    return this._orientation;
  }
}
