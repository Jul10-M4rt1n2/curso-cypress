/// <reference types="cypress"/>

describe('Work with basic elements', () => {
    //Testando textos
    it('Text', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //contain pq é busca generica
        cy.get('body').should('contain', 'Cuidado')
        //Verificando onde esta o Cuidado
        cy.get('span').should('contain', 'Cuidado')
        //Restringindo ainda mais a busca
        cy.get('.facilAchar').should('contain', 'Cuidado')
        //ou
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })
})