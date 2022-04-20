/// <reference types ="cypress"/>

class home {
    go() {
        //visitando a pagina Home
        cy.visit('https://buger-eats-qa.vercel.app/');
        //verificando url
        cy.url().should('eq', 'https://buger-eats-qa.vercel.app/');
    }
    home(){
        //verificando a img logo Home
        cy.get('div.content header img').should('be.visible');
        //verificando texto título Home
        cy.get('div.content main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        //verificando texto paragrafo Home
        cy.get('div.content main p').should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
        // verificando click no botão "Cadastre-se para fazer entregas"
        cy.get('a[href="/deliver"]').click()
        //verificar url de deliver
        cy.url().should('eq', 'https://buger-eats-qa.vercel.app/deliver');
    }
}
export default new home;