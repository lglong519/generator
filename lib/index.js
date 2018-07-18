
const analize = require('./analize.js');
const cli = 'generator w <i|o> <in|out|to> <o|i>';

module.exports = (...rest) => {
	const option = rest[1].match(/^(in|out|to)$/);
	if (!option) {
		throw new SyntaxError(`\x1B[31mInvalid mode\x1B[39m \x1B[33m"${rest[1]}"\x1B[39m`);
	}
	if (option[0] === 'in') {
		if (rest[0] !== 'o' || rest[2] !== 'i') {
			throw new SyntaxError(`\x1B[33m${cli}\x1B[39m`);
		}
		return analize.in(...rest);
	}
	if (option[0].startsWith('o') || option[0].endsWith('o')) {
		if (option[0].startsWith('o') && rest[2] || option[0].endsWith('o') && rest[2] !== 'o') {
			throw new SyntaxError(`\x1B[31mInvalid <o|i>\x1B[39m \x1B[33m"${rest[2]}"\x1B[39m`);
		}
		return analize.out(...rest);
	}
	throw new Error('\x1B[31mUnknown Error\x1B[39m');
};
