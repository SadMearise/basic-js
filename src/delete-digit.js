const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let t = 10;
	let res = [];
	for (let i = 0; i < n.toString().length; i++) {
		res.push(Math.floor(n / t) * (t / 10) + (n % (t / 10)));
		t *= 10;
	}
	return Math.max(...res)
}

module.exports = {
  deleteDigit
};
