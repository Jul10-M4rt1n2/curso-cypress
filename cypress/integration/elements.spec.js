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

    it('Links', () => {
        //sempre colocar o visit nos testes individualmente
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //acao de clicar no link
        cy.get('[href="#"]').click()
        //capturando o resultado do click
        cy.get('#resultado').should('have.text', 'Voltou!')

        //recarregando a pagina
        cy.reload()
        //Verificar que nao tem o texto voltou
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        //usando contains para buscar atravez do texto presente na pagina HTML
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })
})