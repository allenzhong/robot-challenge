import * as readline from 'node:readline';
import Parser from './parser';

function main() {
  console.log('starting robot challenge');
  const parser = new Parser();

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
