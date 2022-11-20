import { bgGreen, bgYellow, bold } from 'colorette';
import Robot from '../models/robot';
import Printer from './printer';

export default class BoardMap {
  private map: string[][];
  private orientation = '';
  private gapChar = '-';
  private gap = 2;
  private printer: Printer = new Printer('BoardMap');

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
    this.printer.printText(
      `\nBoard Map - Robot is facing ${bgYellow(bold(this.orientation))}\n`,
    );
    rows.forEach((row: string[]) => {
      this.printer.printText(row.join(''));
    });
    this.printer.printText('');
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
