import "material-design-lite";
import {ComponentFactory} from "iizuna";
import {SliderComponent} from "./components/slider.component";
import {PasswordGeneratorComponent} from "./components/password-generator.component";
import {SpecialCharComponent} from "./components/special-char.component";

ComponentFactory.registerComponents([
	SliderComponent,
	PasswordGeneratorComponent,
	SpecialCharComponent
]);