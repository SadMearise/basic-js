const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let r = []
    for (let i = 0; i < matrix.length; i++) {
		r.push([])
		for (let j = 0; j < matrix[0].length; j++) {	
			let l = -matrix[i][j];
			const supMatrix = [-1, 0, 1];
			for (let x = 0; x < supMatrix.length; x++) {
				for (let y = 0; y < supMatrix.length; y++) {
					if ((0 <= i + supMatrix[x] && i + supMatrix[x] < matrix.length) && (0 <= j + supMatrix[y] && j + supMatrix[y] < matrix[0].length)) {
						l += matrix[Number(i) + Number(supMatrix[x])][Number(j) + Number(supMatrix[y])]
					}
				}
			}
			r[i].push(Math.abs(l))
		}
	}
	return r;
}

module.exports = {
  minesweeper
};
