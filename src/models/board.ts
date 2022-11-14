export default class Board {
  private readonly LENGTH: number = 5;

  // set 0 to mark no robot, 1 to mark robot position
  private _board: number[][];

  constructor() {
    this._board = new Array(this.LENGTH)
      .fill(0)
      .map(() => new Array(this.LENGTH).fill(0));
  }
}
