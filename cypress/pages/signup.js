/// <reference types ="cypress"/>

class signup{
    //verificar url
    go(){
        //visitando a pagina Home
        cy.visit('https://buger-eats-qa.vercel.app/');
        //verificando url
        cy.url().should('eq', 'https://buger-eats-qa.vercel.app/');
        // verificando click no botão "Cadastre-se para fazer entregas"
        cy.get('a[href="/deliver"]').click();
        //verificar url de deliver
        cy.url().should('eq', 'https://buger-eats-qa.vercel.app/deliver');
    }
    //verificar se está aparecendo conteudo 
    page(){
        //verificar se a logo está aparecendo 
        cy.get('div#page-deliver header img').should('be.visible');
        //verificar click no "Voltar para home"
        cy.get('div#page-deliver header a').click()
        // verificando click no botão "Cadastre-se para fazer entregas"
        cy.get('a[href="/deliver"]').click();
        //verificar h1 pag. de cadastro
        cy.get('div#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
    }
    //verificar se os campos que devem ser preenchidos estão aparecendo
    fields(){
        //verificar Dados campo 'Nome completo'
        cy.get('[name="fullName"]').invoke('attr', 'placeholder').should('contain', 'Nome completo');
        //verificar Dados campo 'CPF somente números'
        cy.get('[name="cpf"]').invoke('attr', 'placeholder').should('contain', 'CPF somente números');
        //verificar Dados campo 'E-mail'
        cy.get('[name="email"]').invoke('attr', 'placeholder').should('contain', 'E-mail');
        //verificar Dados campo 'Whatsapp'
        cy.get('[name="whatsapp"]').invoke('attr', 'placeholder').should('contain', 'Whatsapp');

        //verificar Endereço campo 'CEP'
        cy.get('[name="postalcode"]').invoke('attr', 'placeholder').should('contain', 'CEP');
        //verificar Endereço campo 'RUA'
        cy.get('[name="address"]').invoke('attr', 'placeholder').should('contain', 'Rua');
        //verificar Endereço campo 'Número'
        cy.get('[name="address-number"]').invoke('attr', 'placeholder').should('contain', 'Número');
        //verificar Endereço campo 'Complemente'
        cy.get('[name="address-details"]').invoke('attr', 'placeholder').should('contain', 'Complemento');
        //verificar Endereço campo 'Bairro'
        cy.get('[name="district"]').invoke('attr', 'placeholder').should('contain', 'Bairro');
        //verificar Endereço campo 'Cidade/UF'
        cy.get('[name="city-uf"]').invoke('attr', 'placeholder').should('contain', 'Cidade/UF');
    
        //verificar Método de entrga 'Moto'
        cy.get('[alt="Moto"]').should('be.visible');
        //verificar Método de entrga 'Bike Elétrica'
        cy.get('[alt="Bike Elétrica"]').should('be.visible');
        //verificar Método de entrga 'Van/Carro'
        cy.get('[alt="Van/Carro"]').should('be.visible');
    
        //verificar campo 'Foto da sua CNH'
        cy.get('div.dropzone p ').should('have.text', 'Foto da sua CNH')
    
    }
    // cadastro com valores corretos
    correctRegistration(deliver){
        cy.get('input[name="cpf"]').type(deliver.cpf) 
    }
    
    
    
}
export default new signup;