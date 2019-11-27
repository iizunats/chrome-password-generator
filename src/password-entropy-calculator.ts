import {Configs} from './configs';
import {PasswordGenerator} from './password-generator';

export class PasswordEntropyCalculator {

	/**
	 * @description
	 * Calculate all possible mutations of the given password length based by the amount of characters possible.
	 *
	 * @param {number} passwordLength The created length of the password
	 * @param {number} charListLength The amount of characters possible in the generated password
	 * @return {number}
	 */
	public static calculate(passwordLength?: number, charListLength?: number): number {
		const exponent = Math.pow(this.getCharListLength(charListLength), this.getPasswordLength(passwordLength));

		return Math.ceil(Math.log2(exponent));
	}

	private static getPasswordLength(passwordLength?: number) {
		return typeof passwordLength === 'number' ? passwordLength : Configs.passwordLength;
	}

	private static getCharListLength(charListLength?: number) {
		return typeof charListLength === 'number' ? charListLength : PasswordGenerator.getTotalCharList().length;
	}
}