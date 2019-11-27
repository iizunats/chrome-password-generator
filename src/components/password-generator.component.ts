import {AbstractComponent, Component, EventListener, OnReady} from "iizuna";
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
export class PasswordGeneratorComponent extends AbstractComponent implements OnReady {

	/**
	 * @description
	 * Initializes a single instance if the password generator
	 */
	private generator: PasswordGenerator = new PasswordGenerator();
	private displayInput?: HTMLInputElement;

	public onReady(): void {
		this.displayInput = this.children['generated-password'][0] as HTMLInputElement;
	}

	/**
	 * @description
	 * Appends a click listener to the "generate" button and triggers the password generation
	 */
	@EventListener('click', 'create')
	public generate(): void {
		this.displayInput.value = this.generator.generate();
		this.updateHaveIBeenPwned();
	}

	/**
	 * @description
	 * Resets the have i been pwned check mark and then check whethes the password was pwnd or not
	 */
	private updateHaveIBeenPwned() {
		this.children['not-pwnd'][0].classList.add('hidden');
		this.children['pwnd'][0].classList.add('hidden');
		Pwned.haveIBeenPwned(this.displayInput.value).then((count) => {
			if (count <= 0) {
				this.children['not-pwnd'][0].classList.remove('hidden');
			} else {
				this.children['pwnd'][0].classList.remove('hidden');
			}
		});
	}

	/**
	 * @description
	 * Appends a click listener to the "generate" button and triggers the password generation
	 */
	@EventListener('click', 'copy-password')
	public copy(): void {
		this.displayInput.select();
		document.execCommand("Copy");
		this.displayInput.blur();
	}
}