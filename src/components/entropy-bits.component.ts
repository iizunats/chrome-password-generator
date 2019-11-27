import {AbstractComponent, Component, GlobalEventListener, OnReady} from 'iizuna';
import {PasswordEntropyCalculator} from '../password-entropy-calculator';

@Component({
	selector: 'entropy-bits'
})
export class EntropyBitsComponent extends AbstractComponent implements OnReady {
	element: HTMLElement;

	/**
	 * @description
	 * Updates the displayed entropy bits either when:
	 * - The component is initialized
	 * - The length of the password is updated
	 * - The checkbox for "use special characters" was toggled
	 */
	@GlobalEventListener('update-password-length update-special-chars')
	public onReady(): void {
		this.element.innerText = PasswordEntropyCalculator.calculate() + '';
	}
}