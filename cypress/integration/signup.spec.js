/// <reference types ="cypress"/>

import signupFactory from "../factories/signupFactory";
import signup from "../pages/signup";

describe('Signup', () => {

    it('APP needs to be online', () => {
        signup.go();
        signup.page();
    });
    it('checking fields to be filled', () =>{
        signup.go();
        signup.fields();
    });
    it.only('Register to deliver', () => {
        var deliver = signupFactory.deliver()
        signup.go();
        signup.correctRegistration(deliver)
    });
});