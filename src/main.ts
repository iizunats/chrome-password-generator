import {ComponentFactory} from "iizuna";
import {SliderComponent} from "./components/slider.component";
import {PasswordGeneratorComponent} from "./components/password-generator.component";
import {SpecialCharListComponent} from "./components/special-char-list.component";

ComponentFactory.registerComponents([
	SliderComponent,
	PasswordGeneratorComponent,
	SpecialCharListComponent
]);