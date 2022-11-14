#! /usr/bin/env node
import { program } from 'commander';
import { main } from './run';

program.command('run').description('Run robot challenge').action(main);

program.parse();
