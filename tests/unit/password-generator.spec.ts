import {expect} from 'chai';
import 'mocha';
import {PasswordGenerator} from "../../src/password-generator";
import {Configs} from "../../src/configs";


describe('ComponentFactory Class', () => {
	it('should be declared and be accessible from anywhere', () => {
		expect(typeof PasswordGenerator).to.equal('function');
	});
	it('should generate valid passwords', () => {
		Configs.passwordLength = 12;
		const generator = new PasswordGenerator();
		// Test for 200 Passwords
		for (let i = 0; i < 200; i++) {
			expect(/^(?=.*[0-9]+.*)(?=.*[A-Z]+.*)(?=.*[a-z]+.*)[\x21-\x7e]{3,}$/.test(generator.generate())).to.equal(true);
		}
	});
});