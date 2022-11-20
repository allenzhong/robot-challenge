import { bgGreen, bold } from 'colorette';
import Robot from '../models/robot';

export default class BoardMap {
  private map: string[][];
  private orientation = '';
  private gapChar = '-';
  private gap = 2;

  constructor(private readonly length: number = 5) {
    this.map = new Array(this.length)
      .fill('o')
      .map(() => new Array(this.length).fill('o'));
  }

  public placeRobot(robot: Robot) {
    this.orientation = robot.orientation;
    const y = this.length - robot.position.y - 1;
    const x = robot.position.x;
    this.map[y][x] = bold(bgGreen('R'));
  }

  public showBoardMap(robot: Robot) {
    this.placeRobot(robot);
    const rows = this.buildRows();
    console.log('\nBoard Map\n');
    console.log(`Robot is facing ${this.orientation}\n`);
    rows.forEach((row: string[]) => {
      console.log(row.join(''));
    });
    console.log();
  }

  public buildRows() {
    const rows: string[][] = [];
    for (let i = 0; i < this.length; i++) {
      const row: string[] = [];
      for (let j = 0; j < this.length; j++) {
        const point = this.map[i][j];
        row.push(point);
        if (j !== this.length - 1) {
          row.push(this.gapChar.repeat(this.gap));
        }
      }
      rows.push(row);
      if (i !== this.length - 1) {
        rows.push(this.buildGapRow());
      }
    }
    return rows;
  }

  public buildGapRow() {
    const row: string[] = [];
    for (let i = 0; i < this.length; i++) {
      row.push('|');
      if (i !== this.length - 1) {
        row.push(' '.repeat(this.gap));
      }
    }
    return row;
  }
}
