import * as readline from 'node:readline';
import TableTop from './models/table-top';
import Parser from './infrastructure/parser';
import Printer from './utils/printer';

function main() {
  const printer = new Printer('main');
  printer.printInfo('Starting robot challenge, please enter commands:\n');
  printer.printInfo('Use Ctrl + C to exit\n');

  const parser = new Parser(new TableTop());

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    parser.parse(line);
  });

  rl.on('close', () => {
    printer.printInfo(`Robot stopped`);
  });
}

main();
