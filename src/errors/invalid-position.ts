export default class InvalidPositionError extends Error {
  constructor(message: string) {
    super(message);
  }
}
