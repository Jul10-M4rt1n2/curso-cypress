/*Criando um teste para nao apresentar o erro de arquivo vasio*/
it('nada agora', function(){

})

/*Funcao basica, soma de duas variaveis*/

// function soma(a,b) {
//     return a+b; //retornando resultado da soma das variaveis 
// }

// console.log(soma(1,4)) //exibindo no console do navegador o resultado

/*Criando uma funcao anonima

Lembrando que no JS existem dois tipos de variaveis:
a let que mudo a variavel posteriormente
a const que nao muda.
*/

// const soma = function (a,b) { //jogando a funcao para dentro da variavel soma
//     return a+b
// }

// console.log(soma(1,4)) //exibindo no console do navegador o resultado

/*Arrow function a maneira mais completa*/

// const soma = (a,b) => {
//     return a+b
// }

// console.log(soma(1,4)) //exibindo no console do navegador o resultado

/*Variacao 1 dp Arrow function, forma reduzida*/

// const soma = (a,b) => a+b //O que esta depois do arrow (=>) ele ja entende que é o return

// //desntro do bloco de codigo, precisa ter sempre o return

// console.log(soma(1,4)) //exibindo no console do navegador o resultado

/*Somando um valor unico*/

// const soma = (a) => a+a //se for somente um valor. Podemos tbm eliminar o parenteses
// console.log(soma(1,4)) //exibindo no console do navegador o resultado

/** Somando vazio */

// const soma = () => 5+5
// console.log(soma(1,4)) //exibindo no console do navegador o resultado

/*Criando um testes e utilizando o this
this é a referencia para o escopo em que ela esta sendo executada
*/

it('a function test...', function(){
    console.log('Function', this) //exibindo no console do navegador o resultado
})

/**Usando arrow function */

it('an arrow test...', () =>{
    console.log('Arrow', this) //exibindo no console do navegador o resultado
})