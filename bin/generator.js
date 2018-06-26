#!/usr/bin/env node

const analize = require('../lib');
const program = require('commander');

program.version(`v${require('../package.json').version}`)
	.description('generator');
program.command('generator <mode> <file> [conf]')
	.alias('c')
	.description('generator')
	.action((file, mode, conf) => {
		analize(file, mode, conf);
	});
program.parse(process.argv);

if (program.args.length === 0) {
	program.help();
}
