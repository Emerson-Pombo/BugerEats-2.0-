/// <reference types ="cypress"/>

import home from "../pages/home";
describe('Home page', () => {
    it('APP needs to be online', function() {
        home.go();
        home.home()
    });
});