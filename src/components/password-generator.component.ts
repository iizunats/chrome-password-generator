import {AbstractComponent, Component, EventListener} from "iizuna";
import {PasswordGenerator} from "../password-generator";

@Component({
	selector: 'password-generator',
	childrenSelectors: [
		'create',
		'generated-password'
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
	public click(): void {
		this.getDisplayInput().value = this.generator.generate();
	}

	/**
	 * @description
	 * Returns the first found "generated-password" element
	 */
	private getDisplayInput(): HTMLInputElement {
		return this.children['generated-password'][0] as HTMLInputElement;
	}
}