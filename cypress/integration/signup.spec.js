/// <reference types ="cypress"/>

import signupFactory from "../factories/signupFactory";
import signup from "../pages/signup";

describe('Signup', () => {

    it('APP needs to be online', () => {
        signup.go();
        signup.page();
    });
    it('checking fields to be filled', () => {
        signup.go();
        signup.fields();
    });
    it('checking fields', () => {
        signup.go();
        signup.requireFields();
    });

    it('Register to deliver (correct)', () => {
        var deliver = signupFactory.deliver()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.go();
        signup.correctRegistration(deliver)
        signup.submitCNH()
        signup.submit()
        signup.modalContentShouldBe(expectedMessage)
    });


});
describe('Register incorrect', () => {
    it('Register to deliver (incorrect CPF)', () => {
        var deliver = signupFactory.deliver()
        deliver.cpf = '000000141AA'
        signup.go();
        signup.correctRegistration(deliver)
        signup.submitCNH()
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    });
    it('Register to deliver (incorrect email)', () => {
        var deliver = signupFactory.deliver()
        deliver.email = 'teste.com.br'
        signup.go();
        signup.correctRegistration(deliver)
        signup.submitCNH()
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    });
    it('Register to deliver (incorrect CNH)', () => {
        var deliver = signupFactory.deliver()
        signup.go();
        signup.correctRegistration(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    });
});
describe('Required fields', () => {
    const messages = [
        { field: 'name', output: 'É necessário informar o nome' },
        { field: 'cpf', output: 'É necessário informar o CPF' },
        { field: 'email', output: 'É necessário informar o email' },
        { field: 'postalCode', output: 'É necessário informar o CEP' },
        { field: 'number', output: 'É necessário informar o número do endereço' },
        { field: 'delivery-method', output: 'Selecione o método de entrega' },
        { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
    ]
    before(function () {
        signup.go()
        signup.submit()
    })
    messages.forEach(function (msg) {
        it(`${msg.field} is required`, function () {
            signup.alertMessageShouldBe(msg.output)
        })
    })
});
describe('Responsive test', () => {
    context('iphone-3:', () => {
        it('320x480', () => {
            cy.viewport('iphone-3');
            var deliver = signupFactory.deliver()
            const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
            signup.responsive(deliver)
            signup.modalContentShouldBe(expectedMessage)
        });
    });
    context('iphone-6:', () => {
        it('375x667', () => {
            cy.viewport('iphone-6');
            var deliver = signupFactory.deliver()
            const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
            signup.responsive(deliver)
            signup.modalContentShouldBe(expectedMessage)
        });
    });
    context('samsung-note9:', () => {
        it('414x846', () => {
            cy.viewport('samsung-note9');
            var deliver = signupFactory.deliver()
            const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
            signup.responsive(deliver)
            signup.modalContentShouldBe(expectedMessage)
        });
    });
    context('ipad-2:', () => {
        it('768x1024', () => {
            cy.viewport('ipad-2');
            var deliver = signupFactory.deliver()
            const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
            signup.responsive(deliver)
            signup.modalContentShouldBe(expectedMessage)
        });
    });
    context('macbook-11:', () => {
        it('1366x768', () => {
            cy.viewport('macbook-11');
            var deliver = signupFactory.deliver()
            const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
            signup.responsive(deliver)
            signup.modalContentShouldBe(expectedMessage)
        });
    });
    context('macbook-15:', () => {
        it('1440x900', () => {
            cy.viewport('macbook-15');
            var deliver = signupFactory.deliver()
            const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
            signup.responsive(deliver)
            signup.modalContentShouldBe(expectedMessage)
        });
    });

});
