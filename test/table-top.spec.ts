import { Orientation } from '../src/models/robot';
import TableTop from '../src/models/table-top';

describe('Table top', () => {
  it('should be able to place a robot on the table top', () => {
    const tableTop = new TableTop();
    tableTop.placeRobot(0, 0, Orientation.NORTH);
    expect(tableTop.robot).not.toBeUndefined();
  });

  it('should be able to report the position of a robot on the table top', () => {
    const tableTop = new TableTop();
    tableTop.placeRobot(0, 0, Orientation.NORTH);
    expect(tableTop.report()).toBe('Output: 0,0,NORTH');
  });

  // it('should be able to move a robot on the table top', () => {
  //   const tableTop = new TableTop();
  //   tableTop.placeRobot(0, 0, Orientation.NORTH);
  //   tableTop.robot?.move();
  //   expect(tableTop.report()).toBe('Output: 0,1,NORTH');
  // });

  // it('should be able to turn a robot on the table top', () => {
  //   const tableTop = new TableTop();
  //   tableTop.placeRobot(0, 0, Orientation.NORTH);
  //   tableTop.robot?.turnLeft();
  //   expect(tableTop.report()).toBe('Output: 0,0,WEST');
  // });
});
