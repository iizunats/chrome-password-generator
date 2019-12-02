import {expect} from 'chai';
import 'mocha';
import {PasswordEntropyCalculator} from "../../src/password-entropy-calculator";


describe('ComponentFactory Class', () => {
	it('should be declared and be accessible from anywhere', () => {
		expect(typeof PasswordEntropyCalculator).to.equal('function');
	});
	it('should calculate the entropy of two given strings', () => {
		expect(PasswordEntropyCalculator.calculate(5, 6)).to.equal(13);
		expect(PasswordEntropyCalculator.calculate(35, 2)).to.equal(35);
		expect(PasswordEntropyCalculator.calculate(56, 42)).to.equal(302);
	});
});