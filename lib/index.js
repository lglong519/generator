
const analize = require('./analize.js');
const cli='generator c <mode> <file> [conf]';

module.exports = (...rest) => {
	const option = rest[0].match(/^(in|out)$/);
	if (!option) {
		throw new SyntaxError(`\x1B[31mInvalid mode\x1B[39m \x1B[33m"${rest[0]}"\x1B[39m`);
	}
	if (option[0] === 'in') {
		if(!rest[2]){
			throw new SyntaxError(`[\x1B[33m${cli}\x1B[39m]:\x1B[31mconf is required\x1B[39m`);
		}
		return analize.in(...rest);
	}
	if (option[0] === 'out') {
		if(rest[2]){
			throw new SyntaxError(`\x1B[31mInvalid option\x1B[39m \x1B[33m"${rest[2]}"\x1B[39m`);
		}
		return analize.out(...rest);
	}
	throw new Error('\x1B[31mUnknown Error\x1B[39m');
};
