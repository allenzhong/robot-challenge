import {blue, bold, red, bgRed } from 'colorette';

const log = console.log;
export default class Printer {
  constructor(private readonly serviceName: string) {}

  public printText(message: string): void {
    log(message);
  }

  public print(message: string): void {
    log(this.format(message));
  }

  public printInfo(message: string): void {
    log(this.formatInfo(message));
  }

  public printError(message: string): void {
    log(this.formatError(message));
  }

  private format(message: string): string {
    return `[${this.serviceName}] ${message}`;
  }

  private formatInfo(message: string): string {
    return blue(bold(`${message}`));
  }

  private formatError(message: string): string {
    return `${bgRed('[Error]')} ${red(message)}`;
  }
}
