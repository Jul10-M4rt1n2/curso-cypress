/**Estrutura de testes simples */

const { reject } = require("async")

it('sem testes, ainda', () => {

})

/**pegando um valor usando uma constante */

// const getSomething = () => 10; //atribuindo o valor 10 a constante getSomething

// /**Sistema que vai utilizar o metodo acima */

// const system = () =>{
//     console.log('init'); //iniciando
//     const something = getSomething(); //Atribuindo o valor da contante getSomething a variavel something
//     console.log(`Something is ${something}`); //Exibindo a variavel
//     //console.log("Something is " + something); Forma mais antiga
//     console.log('end')
// }

// system(); //chamando a contate system

/**Simulando uma demora no retorno... conceito de asincrono */

// const getSomething = (callback) => {
//     setTimeout(() => { //setTimeout com uma espera para envio do valor 11 de 1000 (um segundo)
//         callback (12);
//     }, 1000)
// }

// const system = () => {
//     console.log('init');
//     getSomething(some => console.log(`Something is ${some}`));
//     console.log('end')
// }

// system();

/**Utilizando promises */

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
}

const system = () => {
    console.log('init');
    const prom = getSomething();
    prom.then(some => {
        console.log(`Something is ${some}`)
    })
    console.log('end')
}

system();