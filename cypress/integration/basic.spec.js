/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        //Visitando um site para testes
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //pegando o titulo

        // const title = cy.title()
        // console.log(title)

        //Usando pause - para rodar um teste de cada vez
        cy.pause()

        //Assertivas com Shuld
        cy.title().should('be.equal', 'Campo de Treinamento')
        //ou
        cy.title().should('contain', 'Campo')
        //ou
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        //Usando debug - Usar para pegar mais detalhes no especionar elemento sobre algum ponto
        cy.title().should('contain', 'Campo').debug()
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //localizar o elemento e clicar no elemento
        cy.get('#buttonSimple').click()
        //Testes tem q ter assertiva
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
        //Ou
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})