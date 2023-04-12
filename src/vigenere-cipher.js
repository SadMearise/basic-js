const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	// https://calculatorium.ru/cryptography/vigenere-cipher
	constructor(type = true) {
		this.type = type;
		this.square = (function () {
			const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			return alphabet.split('').map((el, index, arr) => [...arr.slice(index, arr.length).concat(...arr.slice(0, index))]);
		})()
	}

	getfullString(message, key) {
		let str = '';
		let count = 0;
		for (let i = 0; i < message.length; i++) {
			if (this.square[0].includes(message[i])) {
				str += key[count % key.length];
				count++;
			} else {
				str += message[i];
			}
		}
		return str;
	}

	encrypt(message, key) {
		if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

		message = message.toUpperCase();
		key = this.getfullString(message, key).toUpperCase();

		let res = '';
		message.split('').forEach((el, index) => {
			if (this.square[0].includes(el)) {
				const row = this.square[0].indexOf(key[index]);
				const col = this.square[0].indexOf(el);
				res += this.square[row][col];
			} else {
				res += el;
			}
		});

		return this.type ? res : res.split('').reverse().join('');
	}

	decrypt(encryptedMessage, key) {
		if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

		encryptedMessage = encryptedMessage.toUpperCase();
		key = this.getfullString(encryptedMessage, key).toUpperCase();

		let res = '';
		key.split('').forEach((el, index) => {
			if (this.square[0].includes(el)) {
				const row = this.square[0].indexOf(el);
				const col = this.square[row].indexOf(encryptedMessage[index]);
				res += this.square[0][col];
			} else {
				res += el;
			}
		});

		return this.type ? res : res.split('').reverse().join('');
	}
}

module.exports = {
  VigenereCipheringMachine
};
