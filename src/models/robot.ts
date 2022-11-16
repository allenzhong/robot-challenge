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

  public move() {
    switch (this._orientation) {
      case Orientation.NORTH:
        this._position.y++;
        break;
      case Orientation.EAST:
        this._position.x++;
        break;
      case Orientation.SOUTH:
        this._position.y--;
        break;
      case Orientation.WEST:
        this._position.x--;
        break;
    }
  }

  public predictNextMove(): Position { 
    const position = new Position(this._position.x, this._position.y);
    switch (this._orientation) {
      case Orientation.NORTH:
        position.y++;
        break;
      case Orientation.EAST:
        position.x++;
        break;
      case Orientation.SOUTH:
        position.y--;
        break;
      case Orientation.WEST:
        position.x--;
        break;
    }
    return position;
  }

  public turnLeft() {
    switch (this._orientation) {
      case Orientation.NORTH:
        this._orientation = Orientation.WEST;
        break;
      case Orientation.EAST:
        this._orientation = Orientation.NORTH;
        break;
      case Orientation.SOUTH:
        this._orientation = Orientation.EAST;
        break;
      case Orientation.WEST:
        this._orientation = Orientation.SOUTH;
        break;
    }
  }

  public turnRight() {
    switch (this._orientation) {
      case Orientation.NORTH:
        this._orientation = Orientation.EAST;
        break;
      case Orientation.EAST:
        this._orientation = Orientation.SOUTH;
        break;
      case Orientation.SOUTH:
        this._orientation = Orientation.WEST;
        break;
      case Orientation.WEST:
        this._orientation = Orientation.NORTH;
        break;
    }
  }
}
