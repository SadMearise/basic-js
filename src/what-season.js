const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
	const seasons = ['spring', 'summer', 'autumn', 'winter'];
	if (date == undefined) return 'Unable to determine the time of year!';
	if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length !== 0) throw new Error("Invalid date!");

	const month = date.getMonth();
	if (month >= 2 && month <= 4) {
		return seasons[0];
	} else if (month >= 5 && month <= 7) {
		return seasons[1];
	} else if (month >= 8 && month <= 10) {
		return seasons[2];
	} else if (month <= 1 || month >= 11) {
		return seasons[3];
	} 
}
module.exports = {
  getSeason
};
