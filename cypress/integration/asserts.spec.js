/// <reference types="cypress"/>

/**Comparando a igualdade entre dois elementos */
it('Equality', () => {
    const a = 1;


    expect(a).equal(1);
})

it('Equality', () => {
    const a = 1;


    expect(a, 'Deveria ser 1').equal(2);
})

it('Equality', () => {
    const a = 1;

    /**Melhorando a leitura */
    expect(a).to.be.equal(2);
})

it('Equality', () => {
    const a = 1;

    /**Trabalahndo com String */
    expect('a').to.be.equal('b');
})

it('Equality', () => {
    const a = 1;

    /**Negando a comparacao */
    expect('a').not.to.be.equal('b');
})

/**Teste de verdadeiro ou falso */
it('Truthy', () => {
    const a = true;

    /**Testando se (a) é verdadeiro */
    expect(a).to.be.true;
})

/**Teste de verdadeiro ou falso */
it('Truthy', () => {
    const a = true;

    /**Testando se (a) é verdadeiro opcao 2*/
    expect(true).to.be.true;
})
/**Teste de verdadeiro ou falso */
it('Truthy', () => {
    const a = true;

    /**Testando se (a) é verdadeiro */
    expect(false).to.be.true;
})

/**Teste de verdadeiro ou falso */
it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

/**Verificar igualdade entre objetos */
it('Truthy', () => {
    const obj = {
        a : 1,
        b : 2,
    };
    /**Verificando se o objeto é igual a ele */
    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
})

/**Verificar igualdade entre objetos */
it('Truthy', () => {
    const obj = {
        a : 1,
        b : 2,
    };
    /**Verificando se o objeto é igual a ele */
    expect(obj).to.be.deep.equal({a:1, b:2});
    expect(obj).eql({a:1, b:2});
    /**Verificando se neste objeto possiu a propriedade A:1 */
    expect(obj).include({a:1});
    /**Indo direto no objeto */
    expect(obj).to.have('b');
    expect(obj).to.have('b', 2);
    /**Verificando que o objeto nao esta vazio */
    expect(obj).to.not.be.empty;
    /**Este objeto tem q ser vazio */
    expect({}).to.be.empty;

})

/**Testes em Arreys */
it('Arrays', () =>{
    const arr= [1,2,3]

    /**Espera-se que o Arrey tenha os seguintes membros */
    expect(arr).to.have.members([1,2,3]);
    /**Verificando somente uma unidade do arrey */
    expect(arr).to.include.members([1,3]);
    /**Verificando se o arrey esta vazio */
    expect(arr).to.not.be.empty;
    /**Um arrey vazio esteja vazio */
    expect([]).to.be.empty;
})

/**Checagem de tipos */
it('Types', () =>{
    const num = 1;
    const str = 'String';

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
})

it('String', () => {
    const str = 'String de teste';

    expect(str).to.be.equals('String de teste');
    /**Verificar tamanho da String, se é de 15 caracteres */
    expect(str).to.have.length(15);
    /**Pegando somente um trixo da String */
    expect(str).to.contains('de');
    /**Iniciar a frase com String */
    expect(str).to.match(/^String/);
    /**Terminar com a palavra teste */
    expect(str).to.match(/teste$/);
    /**Tamanho que estou esperando */
    expect(str).to.match(/.{15}/);
    /**Verificar se existe apenas letras */
    expect(str).to.match(/\w+/);
    /**Verificar q nao contem numeros */
    expect(str).to.match(/\D+/);
})

it('Number', () => {
    const number = 4;
    const floarNumber = 5.2123;

    /**Verificando igualdade */
    expect(number).to.be.equal(4);
    /**Verificar se o numero é acima de 3 */
    expect(number).to.be.above(3);
    /**ou se ele esta abaixo de 7 */
    expect(number).to.be.below(7);
    /**Verificando igualdade */
    expect(floarNumber).to.be.equal(5.2123);
    /**Verificando a proximidade */
    /**Verificando igualdade */
    expect(floarNumber).to.be.closeTo(5.2);
    /**Verificar se o numero é acima de 5 */
    expect(floarNumber).to.be.above(5);
})