export default class Printer {
  constructor(private readonly serviceName: string) {}

  public print(message: string): void {
    console.log(this.format(message));
  }

  public printError(message: string): void {
    console.error(this.format(message));
  }

  private format(message: string): string {
    return `[${this.serviceName}] ${message}`;
  }
  private formatError(message: string): string {
    return `[Error] ${message}`;
  }
}
