import {AbstractComponent, Component, EventHelper, EventListener} from "iizuna";
import {Configs} from "../configs";

@Component({
	selector: 'special-char'
})
export class SpecialCharComponent extends AbstractComponent {
	element: HTMLInputElement;

	@EventListener()
	change() {
		Configs.minSpecialCharacters = +this.element.checked;
		EventHelper.triggerCustomEvent('update-special-chars');
	}
}