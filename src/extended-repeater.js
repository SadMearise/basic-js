const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
	options.addition = typeof options.addition !== "undefined" ? String(options.addition) : "";
	let res = String(str);
	let intermediateRes = String(str);
	let intermediateArr = [];
	if (options.hasOwnProperty('additionRepeatTimes')) {
		for (let i = 0; i < options.additionRepeatTimes; i++) {
			intermediateArr.push(options.addition)
		}
		if (options.hasOwnProperty('additionSeparator')) {
			intermediateRes += intermediateArr.join(`${options.additionSeparator}`);
		} else {
			intermediateRes += intermediateArr.join(`|`);
		}
	} else {
		res += options.addition;
		intermediateRes += options.addition;
	}

	intermediateArr = [];
	if (options.hasOwnProperty('repeatTimes')) {
		for (let i = 0; i < options.repeatTimes; i++) {
			intermediateArr.push(intermediateRes)
		}
		if (options.hasOwnProperty('separator')) {
			res = intermediateArr.join(`${options.separator}`)
		} else {
			res = intermediateArr.join(`+`)
		}
	}
	
	return res
}

module.exports = {
  repeater
};
