import Position from '../src/models/position';
import Robot, { Orientation } from '../src/models/robot';

describe('Robot', () => {
  describe('constructor', () => {
    it('should be able to place a robot on the table top', () => {
      const robot = new Robot(new Position(0, 0), Orientation.NORTH);

      expect(robot.position.x).toBe(0);
      expect(robot.position.y).toBe(0);
      expect(robot.orientation).toBe(Orientation.NORTH);
    });
  });

  describe('move', () => {
    it('when facing north', () => {
      const robot = new Robot(new Position(0, 0), Orientation.NORTH);
      robot.move();

      expect(robot.position.x).toBe(0);
      expect(robot.position.y).toBe(1);
      expect(robot.orientation).toBe(Orientation.NORTH);
    });

    it('when facing east', () => {
      const robot = new Robot(new Position(0, 0), Orientation.EAST);
      robot.move();

      expect(robot.position.x).toBe(1);
      expect(robot.position.y).toBe(0);
      expect(robot.orientation).toBe(Orientation.EAST);
    });

    it('when facing south', () => {
      const robot = new Robot(new Position(1, 1), Orientation.SOUTH);
      robot.move();

      expect(robot.position.x).toBe(1);
      expect(robot.position.y).toBe(0);
      expect(robot.orientation).toBe(Orientation.SOUTH);
    });

    it('when facing west', () => {
      const robot = new Robot(new Position(1, 1), Orientation.WEST);
      robot.move();

      expect(robot.position.x).toBe(0);
      expect(robot.position.y).toBe(1);
      expect(robot.orientation).toBe(Orientation.WEST);
    });
  });

  describe('turnLeft', () => {
    it('when facing north', () => {
      const robot = new Robot(new Position(0, 0), Orientation.NORTH);
      robot.turnLeft();

      expect(robot.position.x).toBe(0);
      expect(robot.position.y).toBe(0);
      expect(robot.orientation).toBe(Orientation.WEST);
    });

    it('when facing east', () => {
      const robot = new Robot(new Position(0, 0), Orientation.EAST);
      robot.turnLeft();

      expect(robot.position.x).toBe(0);
      expect(robot.position.y).toBe(0);
      expect(robot.orientation).toBe(Orientation.NORTH);
    });

    it('when facing south', () => {
      const robot = new Robot(new Position(1, 1), Orientation.SOUTH);
      robot.turnLeft();

      expect(robot.position.x).toBe(1);
      expect(robot.position.y).toBe(1);
      expect(robot.orientation).toBe(Orientation.EAST);
    });

    it('when facing west', () => {
      const robot = new Robot(new Position(1, 1), Orientation.WEST);
      robot.turnLeft();

      expect(robot.position.x).toBe(1);
      expect(robot.position.y).toBe(1);
      expect(robot.orientation).toBe(Orientation.SOUTH);
    });
  });

  describe('turnRight', () => {
    it('when facing north', () => {
      const robot = new Robot(new Position(0, 0), Orientation.NORTH);
      robot.turnRight();

      expect(robot.position.x).toBe(0);
      expect(robot.position.y).toBe(0);
      expect(robot.orientation).toBe(Orientation.EAST);
    });

    it('when facing east', () => {
      const robot = new Robot(new Position(0, 0), Orientation.EAST);
      robot.turnRight();

      expect(robot.position.x).toBe(0);
      expect(robot.position.y).toBe(0);
      expect(robot.orientation).toBe(Orientation.SOUTH);
    });

    it('when facing south', () => {
      const robot = new Robot(new Position(1, 1), Orientation.SOUTH);
      robot.turnRight();

      expect(robot.position.x).toBe(1);
      expect(robot.position.y).toBe(1);
      expect(robot.orientation).toBe(Orientation.WEST);
    });

    it('when facing west', () => {
      const robot = new Robot(new Position(1, 1), Orientation.WEST);
      robot.turnRight();

      expect(robot.position.x).toBe(1);
      expect(robot.position.y).toBe(1);
      expect(robot.orientation).toBe(Orientation.NORTH);
    });
  });

  describe('prediectNextMove', () => {
    it('when facing north', () => {
      const robot = new Robot(new Position(0, 0), Orientation.NORTH);
      const position = robot.predictNextMove();

      expect(position.x).toBe(0);
      expect(position.y).toBe(1);
      expect(robot.orientation).toBe(Orientation.NORTH);
    });

    it('when facing east', () => {
      const robot = new Robot(new Position(0, 0), Orientation.EAST);
      const position = robot.predictNextMove();

      expect(position.x).toBe(1);
      expect(position.y).toBe(0);
      expect(robot.orientation).toBe(Orientation.EAST);
    });

    it('when facing south', () => {
      const robot = new Robot(new Position(1, 1), Orientation.SOUTH);
      const position = robot.predictNextMove();

      expect(position.x).toBe(1);
      expect(position.y).toBe(0);
      expect(robot.orientation).toBe(Orientation.SOUTH);
    });

    it('when facing west', () => {
      const robot = new Robot(new Position(1, 1), Orientation.WEST);
      const position = robot.predictNextMove();

      expect(position.x).toBe(0);
      expect(position.y).toBe(1);
      expect(robot.orientation).toBe(Orientation.WEST);
    });
  });
});
