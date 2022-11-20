export default class InvalidCommandError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, InvalidCommandError.prototype);
  }
}
