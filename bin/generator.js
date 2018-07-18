#!/usr/bin/env node

const analize = require('../lib');
const program = require('commander');

program.version(`v${require('../package.json').version}`)
	.description('generator');
program.command('generator <file> <mode> [conf]')
	.alias('w')
	.description('generator')
	.action((file, mode, conf) => {
		analize(file, mode, conf);
	});
program.parse(process.argv);

if (program.args.length === 0) {
	program.help();
}
