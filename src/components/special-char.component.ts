import {AbstractComponent, Component, EventHelper, EventListener} from 'iizuna';
import {Configs} from '../configs';

@Component({
	selector: 'special-char'
})
export class SpecialCharComponent extends AbstractComponent {
	element: HTMLInputElement;

	@EventListener()
	change() {
		// a little "hack" to transform the boolean to the minimum wanted special character when checked (which is always 1)
		Configs.minSpecialCharacters = +this.element.checked;
		EventHelper.triggerCustomEvent('update-special-chars');
	}
}