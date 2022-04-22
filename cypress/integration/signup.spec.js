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
    it('checking fields', () =>{
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
    before(function(){
        signup.go()
        signup.submit()
    })
    messages.forEach(function(msg){
        it(`${msg.field} is required`, function(){
            signup.alertMessageShouldBe(msg.output)
        })
    })
});
    
