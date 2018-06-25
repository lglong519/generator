#!/usr/bin/env node

const analize = require('../lib');
const program = require('commander');

program.version(`v${require('../package.json').version}`)
	.description('generator');

program.command('generator <file> <mode>')
	.alias('c')
	.description('generator')
	.action((file, mode) => {
		console.log(0, file, mode);
		analize(file, mode);
	});
program.parse(process.argv);

if (program.args.length === 0) {
	program.help();
}
