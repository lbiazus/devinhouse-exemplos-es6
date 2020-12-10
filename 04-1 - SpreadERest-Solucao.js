
/*
funcionario  = {
    nome:,
    idade:,
    cargo:,
    salario
}
*/

function criarNovoFuncionarioComParametro(funcionario, nome, idade) {
    const novoFuncionario = {...funcionario, nome: nome, idade: idade}
}

function criarNovoFuncionario(funcionario) {
    const novoFuncionario = {...funcionario, nome: 'Leo', idade: 32}
}

function calcular(operacao, ...numeros) {
    let resultado = operacao === 'multiplicacao' ? 1 : 0;

    if (operacao !== 'soma' && operacao !== 'multiplicacao') {
        return 'Operação desejada não implementada, operação possíveis: soma e multiplicao';
    }

    for (var i=0;i<numeros.length;i++) {
        if (operacao === 'soma') {
            resultado = resultado + numeros[i];
        } else if (operacao === 'multiplicacao') {
            resultado = resultado * numeros[i]; 
        }
    }
  return resultado;
}

//exercício 17:
function imprimirMaisVendidos(maisVendido, segundo, terceiro, ...livros) {
    console.log(`Mais Vendido: ${maisVendido}`);
    console.log("Segundo mais vendido: ", segundo);
    console.log("Terceiro mais vendido: ", terceiro);
    console.log('Sequencia da lista:', livros);
}