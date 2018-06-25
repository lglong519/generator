
const analize = require('./analize.js');

module.exports = (a, b) => {
	const option = b.match(/^in|out$/);
	if (!option) {
		throw new SyntaxError(`Invalid option ${b}`);
	}
	if (option[0] === 'in') {
		return analize.in(a, b);
	}
	if (option[0] === 'out') {
		return analize.out(a, b);
	}
	throw new Error('Unknown Error');
};
