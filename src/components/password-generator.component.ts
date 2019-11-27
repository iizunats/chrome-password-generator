import {AbstractComponent, Component, EventListener} from "iizuna";
import {PasswordGenerator} from "../password-generator";
import {Pwned} from "@iizuna/pwned-passwords/lib/utilities/pwned";

@Component({
	selector: 'password-generator',
	childrenSelectors: [
		'create',
		'generated-password',
		'copy-password',
		'not-pwnd',
		'pwnd'
	]
})
export class PasswordGeneratorComponent extends AbstractComponent {

	/**
	 * @description
	 * Initializes a single instance if the password generator
	 */
	private generator: PasswordGenerator = new PasswordGenerator();

	/**
	 * @description
	 * Appends a click listener to the "generate" button and triggers the password generation
	 */
	@EventListener('click', 'create')
	public generate(): void {
		const pw = this.generator.generate();
		this.getDisplayInput().value = pw;
		this.children['not-pwnd'][0].classList.add('hidden');
		this.children['pwnd'][0].classList.add('hidden');
		Pwned.haveIBeenPwned(pw).then((val) => {
			if (val <= 0) {
				this.children['not-pwnd'][0].classList.remove('hidden');
			} else {
				this.children['pwnd'][0].classList.remove('hidden');
			}
		})
	}

	/**
	 * @description
	 * Appends a click listener to the "generate" button and triggers the password generation
	 */
	@EventListener('click', 'copy-password')
	public copy(): void {
		this.getDisplayInput().select();
		document.execCommand("Copy");
		this.getDisplayInput().blur();
	}

	/**
	 * @description
	 * Returns the first found "generated-password" element
	 */
	private getDisplayInput(): HTMLInputElement {
		return this.children['generated-password'][0] as HTMLInputElement;
	}
}