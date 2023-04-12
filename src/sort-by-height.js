const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	newArr = []
	arr.forEach((el, index) => {
		if (el == -1) {
			newArr.push(index);
		}
	});
	arr.sort((a, b) => a - b);

	arr.reverse();
	for (let i = 0; i < newArr.length; i++) {
		arr.pop();
	}
	arr.reverse();
	for (let i = 0; i < newArr.length; i++) {
		console.log(newArr[i]);
		arr.splice(newArr[i], 0, -1);
	}
	return arr;
}

module.exports = {
  sortByHeight
};
