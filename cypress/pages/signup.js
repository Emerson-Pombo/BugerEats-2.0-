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
        //verificar Método de entrega 'Van/Carro'
        cy.get('[alt="Van/Carro"]').should('be.visible');
    
        //verificar campo 'Foto da sua CNH'
        cy.get('div.dropzone p ').should('have.text', 'Foto da sua CNH')
    
    }
    //verificar alertas de erro dos campos obrigatórios 
    requireFields(){
        //verificar click no botão "Cadastre-se para fazer entregas"
        cy.get('[type="submit"]').click();
        //verificando menssagen de alerta para campos obrigatórios não preenchidos
        cy.get('[class="alert-error"]').contains('É necessário informar o nome', {mult:true})
        cy.get('[class="alert-error"]').contains('É necessário informar o CPF', {mult:true}) 
        cy.get('[class="alert-error"]').contains('É necessário informar o email', {mult:true})
        cy.get('[class="alert-error"]').contains('É necessário informar o número do endereço', {mult:true})
        cy.get('[class="alert-error"]').contains('Selecione o método de entrega', {mult:true})
        cy.get('[class="alert-error"]').contains('Adicione uma foto da sua CNH', {mult:true})   
    }
    //verificar cadastro com valores corretos
    correctRegistration(deliver){
        //verificar o preenchimento do campo "Nome completo"
        cy.get('[name="fullName"]').type(deliver.fullName)
        //verificar o preenchimento do campo "CPF somente número"
        cy.get('input[name="cpf"]').type(deliver.cpf) 
        //verificar o preenchimento do campo "E-mail"
        cy.get('[name="email"]').type(deliver.email)
        //verificar o preenchimento do campo "Whatsapp"
        cy.get('[name="whatsapp"]').type(deliver.numberPhone)

        //verificar o preenchimento do campo "CEP"
        cy.get('[name="postalcode"]').type(deliver.address.postalCode)
        //verificar click no botão "Buscar CEP"
        cy.get('[value="Buscar CEP"]').click();
        //verificar o preenchimento do campo "Número"
        cy.get('[name="address-number"]').type(deliver.address.number)
        //verificar o preenchimento do campo "Complemento"
        cy.get('[name="address-details"]').type(deliver.address.details)

        //verificar a seleção do campo "Método de entrega"
        //verificar a seleção do "Método de entrega" como "Moto"
        cy.get('[alt="Moto"]').click()
        //verificar a seleção do "Método de entrega" como "Bike Elétrica"
        cy.get('[alt="Bike Elétrica"]').click()
        //verificar a seleção do "Método de entrega" como "Van/Carro"
        cy.get('[alt="Van/Carro"]').click()
        //verificar remoção da seleção do "Método de entrega" como "Moto"
        cy.get('[alt="Moto"]').click()
        //verificar remoção da seleção do "Método de entrega" como "Bike Elétrica"
        cy.get('[alt="Bike Elétrica"]').click()
        //verificar remoção da seleção do "Método de entrega" como "Van/Carro"
        cy.get('[alt="Van/Carro"]').click()
        //verificar a seleção do "Método de entrega" como "Moto"
        cy.get('[alt="Moto"]').click()
    }
    //verificar upload do documento
    submitCNH(){
        //verificar o upload da foto da CNH
        cy.get('[type="file"]').selectFile('cypress/fixtures/img/cnh-digital.jpg', {force: true})
    }
    //verificar envio de dados
    submit(){
        //verificar click no botão "Cadastre-se para fazer entregas"
        cy.get('[type="submit"]').click();
    }
    //verificar se o cadastro foi concluido com sucesso 
    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container  .swal2-html-container')
            .should('have.text', expectedMessage)
    }
    //verificar cpf invalido
    alertMessageShouldBe(expectedMessage) {
        cy.get('.alert-error').should('have.text', expectedMessage)
    }
    //verificar email invalido
    alertMessageShouldBe(expectedMessage) {
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
    //varificar resposividade
    responsive(deliver){
        //visitando a pagina Home
        cy.visit('https://buger-eats-qa.vercel.app/');
        //verificando url
        cy.url().should('eq', 'https://buger-eats-qa.vercel.app/');
        // verificando click no botão "Cadastre-se para fazer entregas"
        cy.get('a[href="/deliver"]').click();
        //verificar url de deliver
        cy.url().should('eq', 'https://buger-eats-qa.vercel.app/deliver');

        //verificar o preenchimento do campo "Nome completo"
        cy.get('[name="fullName"]').type(deliver.fullName)
        //verificar o preenchimento do campo "CPF somente número"
        cy.get('input[name="cpf"]').type(deliver.cpf) 
        //verificar o preenchimento do campo "E-mail"
        cy.get('[name="email"]').type(deliver.email)
        //verificar o preenchimento do campo "Whatsapp"
        cy.get('[name="whatsapp"]').type(deliver.numberPhone)

        //verificar o preenchimento do campo "CEP"
        cy.get('[name="postalcode"]').type(deliver.address.postalCode)
        //verificar click no botão "Buscar CEP"
        cy.get('[value="Buscar CEP"]').click();
        //verificar o preenchimento do campo "Número"
        cy.get('[name="address-number"]').type(deliver.address.number)
        //verificar o preenchimento do campo "Complemento"
        cy.get('[name="address-details"]').type(deliver.address.details)

        //verificar a seleção do campo "Método de entrega"
        //verificar a seleção do "Método de entrega" como "Moto"
        cy.get('[alt="Moto"]').click()
        //verificar a seleção do "Método de entrega" como "Bike Elétrica"
        cy.get('[alt="Bike Elétrica"]').click()
        //verificar a seleção do "Método de entrega" como "Van/Carro"
        cy.get('[alt="Van/Carro"]').click()
        //verificar remoção da seleção do "Método de entrega" como "Moto"
        cy.get('[alt="Moto"]').click()
        //verificar remoção da seleção do "Método de entrega" como "Bike Elétrica"
        cy.get('[alt="Bike Elétrica"]').click()
        //verificar remoção da seleção do "Método de entrega" como "Van/Carro"
        cy.get('[alt="Van/Carro"]').click()
        //verificar a seleção do "Método de entrega" como "Moto"
        cy.get('[alt="Moto"]').click()

        //verificar o upload da foto da CNH
        cy.get('[type="file"]').selectFile('cypress/fixtures/img/cnh-digital.jpg', {force: true})
    
        //verificar click no botão "Cadastre-se para fazer entregas"
        cy.get('[type="submit"]').click();

        
    
    }  
}
export default new signup;