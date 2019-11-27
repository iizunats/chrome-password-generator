import {AbstractComponent, Component, GlobalEventListener, OnReady} from "iizuna";
import {Configs} from "../configs";
import {PasswordGenerator} from "../password-generator";

@Component({
	selector: 'entropy-bits'
})
export class EntropyBitsComponent extends AbstractComponent implements OnReady {
	element: HTMLSpanElement;

	public onReady(): void {
		this.calculateEntropyBits();
	}

	@GlobalEventListener('update-password-length update-special-chars')
	private calculateEntropyBits() {
		this.element.innerText = Math.ceil(Math.log2(Math.pow(PasswordGenerator.getTotalCharList().length, Configs.passwordLength))) + '';
	}
}