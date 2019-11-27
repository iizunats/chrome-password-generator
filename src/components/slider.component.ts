import {AbstractComponent, Component, ElementAttribute, EventHelper, EventListener, OnReady} from "iizuna";
import {Configs} from "../configs";

@Component({
	selector: 'slider',
	childrenSelectors: [
		'slider-value',
		'slider-value-out'
	]
})
export class SliderComponent extends AbstractComponent implements OnReady {

	/**
	 * @description
	 * Allows for a configuration of the minimum allowed value of the slider
	 */
	@ElementAttribute()
	public minLength: string = '8';

	/**
	 * @description
	 * Contains the config name of the slider which is automatically updated in the Configs Class
	 */
	@ElementAttribute()
	public slider: string = '';

	/**
	 * @description
	 * Initializes the slider and already updates the Configs Class property based by the configured minLength
	 */
	public onReady(): void {
		this.getSliderElement().value = "12";
		this.getSliderElement().min = this.minLength;
		this.updateSliderValueOut(this.minLength);
	}

	@EventListener('input change', 'slider-value')
	public change(element: HTMLInputElement): void {
		this.updateSliderValueOut(element.value);
	}

	/**
	 * @description
	 * Updates the Configs Class property and the label of the slider
	 * @param value
	 */
	private updateSliderValueOut(value: string): void {
		Configs[this.slider] = +value;
		this.getSliderLabel().innerText = Configs[this.slider] + '';
		EventHelper.triggerCustomEvent('update-password-length');
	}

	/**
	 * @description
	 * Returns the first found "slider-value-out" element
	 */
	private getSliderLabel(): HTMLSpanElement {
		return this.children['slider-value-out'][0] as HTMLSpanElement;
	}

	/**
	 * @description
	 * Returns the first found "slider-value" element
	 */
	private getSliderElement(): HTMLInputElement {
		return this.children['slider-value'][0] as HTMLInputElement;
	}
}