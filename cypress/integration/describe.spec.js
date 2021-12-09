/**Importando a biblioteca do Cypress */
/// <reference types="cypress"/>

/**Teste unico com IT */
/**Skip pausa um unico teste ou pode ser aplicado a um grupo, nao deixando ele ser executado */
it.skip('A external test...', () => {

})

/**Only Executa unica e exclusivamente esse teste */
it.only('A external test...', () => {

})

/**Agrupando testes com Describe */

describe('Should grup tests...', () => {
    /**Pode criar varios sub grupos */
    describe('Should grup more specific tests...', () => {
        /**Pode criar varios testes dentro de um grupo */
        it('A specific test...', () => {

        })
    })
    it('A internal test...', () => {

    })
})