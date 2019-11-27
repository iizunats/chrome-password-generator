/**
 * @description
 * This class is only a container of static properties to be used all around the extension
 */
export class Configs {
	public static passwordLength?: number;
	public static minSpecialCharacters: number = 0;

	public static minNumbers: number = 1;
	public static minLettersSmall: number = 1;
	public static minLettersBig: number = 1;

	public static specialCharList: string = ',.:;-_#+~<>`/*\'"|^[]\\!$%&(){}=?@';

	public static numbersList: string = '0123456789';
	public static lettersSmallList: string = 'abcdefghijklmnopqrstuvwxyz';
	public static lettersBigList: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}