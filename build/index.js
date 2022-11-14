#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var run_1 = require("./run");
commander_1.program
    .command('run')
    .description('Run robot challenge')
    .action(run_1.run);
commander_1.program.parse();
