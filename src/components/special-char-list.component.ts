import {AbstractComponent, Component, EventListener, OnReady} from "iizuna";
import {Configs} from "../configs";

@Component({
	selector: 'special-char-list'
})
export class SpecialCharListComponent extends AbstractComponent implements OnReady {
	element: HTMLInputElement;

	/**
	 * @description
	 * Updates the element with the default special character list
	 */
	public onReady(): void {
		this.element.value = Configs.specialCharList;
	}

	/**
	 * @description
	 * If the user leaves the input, update the specialCharList of the Configs class
	 */
	@EventListener('blur')
	public blur() {
		Configs.specialCharList = this.element.value;
	}
}