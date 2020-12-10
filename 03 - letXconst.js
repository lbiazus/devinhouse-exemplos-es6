function letXConst() {
    let variavel = 1;
    variavel = 2;
    console.log("Variável: ", variavel);

    const constante = 1;
    constante = 2;
    console.log("Constante: ", constante);
}


function constWithObject() {
    const pessoa = {
        nome: 'Zé',
        idade: 30,
        profissao: 'Programador'
    }

    pessoa.nome = 'Leo';
    console.log("pessoa ", pessoa);
}


