import * as readline from 'node:readline';
import TableTop from './models/table-top';
import Parser from './parser';

function main() {
  console.log('starting robot challenge');
  const parser = new Parser(new TableTop());

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    parser.parse(line);
  });

  rl.on('close', () => {
    console.log(`Stop Robot`);
  });
}

main();
