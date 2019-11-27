import {Configs} from "./configs";

export class PasswordGenerator {

	/**
	 * @description
	 * Generates a password based by the settings inside the Configs Class
	 */
	public generate() {
		let password = PasswordGenerator.createRequiredChars(Configs.specialCharList, Configs.minSpecialCharacters);
		console.log(Configs.minSpecialCharacters);
		if (password.length <= Configs.passwordLength) { // If the special Characters are not more than the total string length
			password += PasswordGenerator.createRequiredChars(Configs.numbersList, Configs.minNumbers);
			password += PasswordGenerator.createRequiredChars(Configs.lettersSmallList, Configs.minLettersSmall);
			password += PasswordGenerator.createRequiredChars(Configs.lettersBigList, Configs.minLettersBig);
			password += PasswordGenerator.createRequiredChars(Configs.specialCharList, Configs.minSpecialCharacters);
			password += PasswordGenerator.createFillingCharacters(password);
		}

		// @todo: ^(?=.*[0-9]+.*)(?=.*[A-Z]+.*)(?=.*[a-z]+.*)[\x21-\x7e]{3,}$

		return PasswordGenerator.shuffleString(password);
	}

	/**
	 * @description
	 * Returns a string with random picked character of the total charset available based by the password.
	 * Returns a empty string if the password is already long enough
	 * @param pw
	 */
	private static createFillingCharacters(pw: string): string {
		return this.createRequiredChars(this.getTotalCharList(), this.getRemainingCharactersCount(pw));
	}

	/**
	 * @description
	 * Calculates the remaining characters to create based by the already created password string.
	 * Never returns a number smaller than 0
	 * @param password
	 */
	private static getRemainingCharactersCount(password: string): number {
		const remaining = Configs.passwordLength - password.length;
		return remaining >= 0 ? remaining : 0;
	}

	/**
	 * @description
	 * Returns all defined characters that are possible for the password generation
	 */
	public static getTotalCharList(): string {
		let total = '';
		if (Configs.minSpecialCharacters > 0) {
			total += Configs.specialCharList;
		}
		return total + Configs.numbersList + Configs.lettersSmallList + Configs.lettersBigList;
	}

	/**
	 * @description
	 * Returns a random combination of characters.
	 * The length and the content is defined by the passed arguments.
	 * @param charList A List of characters that should be randomly picked
	 * @param count If a count lower or equal 0 is set an empty string is returns
	 */
	private static createRequiredChars(charList: string, count: number): string {
		let ret = '';
		if (count <= 0) {
			return ret;
		}
		for (var i = 0, n = charList.length; i < count; ++i) {
			ret += charList.charAt(Math.floor(Math.random() * n));
		}
		return ret;
	}

	/**
	 * @description
	 * Shuffles the passed string
	 * @param string
	 */
	private static shuffleString(string: string): string {
		let characterArray = string.split('');
		characterArray.forEach((item, i) => {
			const j = Math.floor(Math.random() * (i + 1));
			[characterArray[i], characterArray[j]] = [characterArray[j], characterArray[i]];
		});
		return characterArray.join('');
	}
}