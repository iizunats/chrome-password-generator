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

	private sliderElement?: HTMLInputElement;
	private sliderLabel?: HTMLSpanElement;

	/**
	 * @description
	 * Initializes the slider and already updates the Configs Class property based by the configured minLength
	 */
	public onReady(): void {
		this.sliderLabel = this.children['slider-value-out'][0] as HTMLSpanElement;
		this.sliderElement = this.children['slider-value'][0] as HTMLInputElement;
		this.sliderElement.value = Configs.defaultLength + '';
		this.sliderElement.min = this.minLength;
		this.updateSliderValueOut(Configs.defaultLength + '');
	}

	/**
	 * @description
	 * Updates all parties when the slider was changed
	 * @param {HTMLInputElement} element
	 */
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
		this.sliderLabel.innerText = Configs[this.slider] + '';
		EventHelper.triggerCustomEvent('update-password-length');
	}
}