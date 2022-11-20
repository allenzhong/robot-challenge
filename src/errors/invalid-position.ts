export default class InvalidPositionError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, InvalidPositionError.prototype);
  }
}
