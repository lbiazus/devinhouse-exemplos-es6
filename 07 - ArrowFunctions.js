const imprimirRanking = (vencedor, segundo, terceiro, ...demaisCompetidores) => {
    console.log("Vencedor: ", vencedor);
    console.log("Segundo Colocado: ", segundo);
    console.log("Terceiro Colocado: ", terceiro);
    
    console.log("Os demais competidores foram: ", demaisCompetidores);
}

imprimirRanking('Godofredo','Ariosvalo','Marieta','Fred','Vilma','Barney','Pedrita');

const somarNumeros = (a, b) => a + b;

const soma = somarNumeros(100, 150);
console.log("Soma: ", soma);

const funcionario = {
    nome: 'Godofredo',
    idade: 30,
    profissao: 'Programador'
}

const getNome = pessoa => pessoa.nome;
const nome = getNome(funcionario);
console.log("Nome: ", nome);

const getNomeComReturn = pessoa => { 
    console.log("pessoa ", pessoa);
    return pessoa.nome;
}

const somarArray =  (...numeros) => 
    numeros.reduce((acumulador, corrente) => acumulador + corrente, 0);


const numerosSomados = somarArray(100, 50, 200, 120);


console.log("Numeros Somados: ", numerosSomados);
