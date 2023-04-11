const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
	const numberSampleActivity = Number(sampleActivity);
	if (typeof sampleActivity !== 'string' || isNaN(sampleActivity) || numberSampleActivity <= 0 || numberSampleActivity > 15) return false;
	const a = Math.log(MODERN_ACTIVITY / numberSampleActivity);
	const k = 0.693 / HALF_LIFE_PERIOD;
	return Math.ceil(a / k);
}


module.exports = {
  dateSample
};
