/* Gabarito dos Exercícios da Semana 4 */

/* 1 - Crie uma função que receba como parâmetro uma lista de notas e 
calcule a média dessas notas imprimindo o resultado.*/

function calcularMedia(notas) {
    let somaNotas = 0;
    notas.forEach(nota => {
        somaNotas += nota;
    });
    console.log("A média final foi: ", somaNotas / notas.length);
}

const calcularMediaReduce = (...notas) => {
    const media = notas.reduce((somaNotas, nota) => somaNotas + nota, 0) / notas.length;
    console.log("A média final usando reduce foi: ", media);
}

//Exemplo de Chamada as funções:
calcularMedia([10,9,8,5]);
calcularMediaReduce(10,9,8,5);
/*--------------------------------------------------------------------------------------------------*/

/* 2 - Crie uma função que receba um uma lista de números e imprima o quadrado de cada número. */

function calcularQuadrado(numeros) {
    const quadrados = numeros.map(numero => numero * numero);
    console.log("Os quadrados dos números são: ", quadrados);
}

//Exemplo de Chamada as funções:
calcularQuadrado([10,9,8,5]);
/*--------------------------------------------------------------------------------------------------*/

/* Lista de pessoas para teste dos exercícios 3 a 7 */
const pessoas = [
    {
        nome: 'Godofredo',
        idade: 25,
        telefone: '(48) 989892989',
        profissao: 'Programador'
    },
    {
        nome: 'Ariosvaldo',
        idade: 32,
        telefone: '(48) 998569956',
        profissao: 'Motorista'
    },
    {
        nome: 'Marieta',
        idade: 17,
        telefone: '(48) 985965896',
        profissao: 'Programador'
    },
    {
        nome: 'Fred',
        idade: 16,
        telefone: '(48) 989659656',
        profissao: 'Programador'
    },
    {
        nome: 'Barney',
        idade: 17,
        telefone: '(48) 986956958',
        profissao: 'Programador'
    },
]
/* */

/* 3 - Considerando uma entidade Pessoa que contém os atributos nome, idade, telefone e profissão, 
crie uma função que receba uma lista de pessoas e descubra se alguma das pessoas da lista 
é maior de idade (18 anos) retornando o resultado. */

const verificarExisteReponsavel = pessoas => {
    return pessoas.some(pessoa => pessoa.idade > 18);
}

//Exemplo de Chamada as funções:
console.log("Existe Responsável? ", verificarExisteReponsavel(pessoas));
/*--------------------------------------------------------------------------------------------------*/

/* 4 - Considerando a mesma entidade Pessoa do exercício 3: [SP04] - 3 - Verificação de Maioridade de Pessoas 
crie uma função que receba uma lista de pessoas e descubra se todas as pessoas da lista possuem 
a profissão “Programador” retornando o resultado. */

const verificarSeTodosSaoProgramadores = pessoas => {
    return pessoas.every(pessoa => pessoa.profissao === 'Programador');
}

//Exemplo de Chamada as funções:
console.log("Todos São Programadores? ", verificarSeTodosSaoProgramadores(pessoas));
/*--------------------------------------------------------------------------------------------------*/

/* 5 - Novamente considerando a entidade Pessoa do exercício 3: [SP04] - 3 - Verificação de Maioridade de Pessoas 
crie uma função que receba uma lista de pessoas e retorne uma lista com os nomes das pessoas. */

const listarNomes = pessoas => {
    return pessoas.map(pessoa => pessoa.nome);
}

//Exemplo de Chamada as funções:
console.log("Os nomes são: ", listarNomes(pessoas));
/*--------------------------------------------------------------------------------------------------*/

/* 6 - Novamente considerando a entidade Pessoa do exercício 3: [SP04] - 3 - Verificação de Maioridade de Pessoas crie 
uma função que receba uma lista de pessoas e retorne uma nova lista contendo apenas as pessoas com idade menor que 18 anos. */

const buscarMenoresDeIdade = pessoas => {
    return pessoas.filter(pessoa => pessoa.idade < 18);
}

//Exemplo de Chamada as funções:
console.log("Menores de Idade: ", buscarMenoresDeIdade(pessoas));
/*--------------------------------------------------------------------------------------------------*/

/* 7 - 
Novamente considerando a entidade Pessoa do exercício 3: [SP04] - 3 - Verificação de Maioridade de Pessoas 
crie uma função que receba uma lista de pessoas e retorne a primeira pessoa com idade maior que 18 anos. */

const buscarResponsavel = pessoas => {
    return pessoas.find(pessoa => pessoa.idade > 18);
}

//Exemplo de Chamada as funções:
console.log("Responsável: ", buscarResponsavel(pessoas));
/*--------------------------------------------------------------------------------------------------*/

/* 8 - Crie uma função que receba uma lista de valores numéricos, e utilizando a função reduce imprima a multiplicação dos valores da lista. */

const multiplicar = numeros => {
    console.log("A multiplicação dos números é: ", numeros.reduce((total, numero) => total * numero));
}

const multiplicarComInicializadorNoReduceSeparandoOReduceDaImpressao = numeros => {
    const multiplicacao = numeros.reduce((total, numero) => total * numero, 1)
    console.log("A multiplicação dos números é: ", multiplicacao);
}
//Exemplo de Chamada as funções:
multiplicar([10,25,5,3,10])
multiplicarComInicializadorNoReduceSeparandoOReduceDaImpressao([10,25,5,3,10])
/*--------------------------------------------------------------------------------------------------*/

/* 9 - Declare uma arrowFunction que deverá possuir dois parâmetros (nome, idade). 
A nossa função deve mostrar no console a seguinte frase: “Olá, eu sou <nome>, e tenho <idade> anos”. */

const imprmirNomeEIdade = (nome, idade) => {
    console.log("Olá eu sou " + nome + ", e tenho " + idade + " anos")
}

const imprmirNomeEIdadeComTemplateString = (nome, idade) => {
    console.log(`Olá eu sou ${nome}, e tenho ${idade} anos`)
}

//Exemplo de Chamada as funções:
imprmirNomeEIdade('Godofredo', 25);
imprmirNomeEIdadeComTemplateString('Ariosvaldo', 37);
/*--------------------------------------------------------------------------------------------------*/

/* 10 - Crie uma função que retornará uma promise, ela receberá dois valores numéricos como parâmetro, 
a função deve somar os dois valores e somente resolver a promise caso o resultado seja par 
retornando o valor da soma e rejeitando a promise caso ímpar, retornando uma mensagem explicativa */


export const somarPares = (primeiroValor, segundoValor) => {
    const soma = primeiroValor + segundoValor;
    return new Promise((resolve, reject) => {
        if (soma % 2 === 0) {
            resolve(soma);
        } else {
            reject('A soma dos valores é Ímpar');
        }
    })
}

export const somarParesComTempoDeEspera = (primeiroValor, segundoValor) => {
    const soma = primeiroValor + segundoValor;
    return new Promise((resolve, reject) => {
        if (soma % 2 === 0) {
            setTimeout(() => resolve(soma), 5000);
        } else {
            reject('A soma dos valores é Ímpar');
        }
    })
}

//Exemplo de Chamada as funções:
somarPares(100,150).then(soma => console.log("O resultado da soma foi: ", soma)).catch(mensagem => console.log(mensagem));
somarPares(125,150).then(soma => console.log("O resultado da soma foi: ", soma)).catch(mensagem => console.log(mensagem));
somarParesComTempoDeEspera(100,150).then(soma => console.log("O resultado da soma foi: ", soma)).catch(mensagem => console.log(mensagem));
somarParesComTempoDeEspera(125,150).then(soma => console.log("O resultado da soma foi: ", soma)).catch(mensagem => console.log(mensagem));

const executarPromise = async (primeiroValor, segundoValor) => {
    const soma = await funcoes.somarParesComTempoDeEspera(primeiroValor, segundoValor).catch(mensagem => console.log(mensagem));
    console.log("Soma: ", soma)
}

executarPromise(150,150);
executarPromise(125,150);
/*--------------------------------------------------------------------------------------------------*/

/* 11 - Crie uma arrowFunction que receba um objeto contendo altura e largura de um retângulo e retorne a área do retângulo. */

const calcularAreaRetangulo = retangulo => retangulo.largura * retangulo.altura;

//Exemplo de Chamada as funções:
const retangulo = {
    largura: 15,
    altura: 10
}

console.log("A altura do retângulo é : ", calcularAreaRetangulo(retangulo));
console.log("A altura do retângulo é : ", calcularAreaRetangulo({largura: 10, altura: 5}));
/*--------------------------------------------------------------------------------------------------*/

/* 12 - Crie uma função que receba 3 parâmetros (bairro, cidade, estado) e imprima os dados em um formato de endereço, utilizando Template String. */

const imprimirEndereco = (bairro, cidade, estado) => {
    console.log(`Bairro: ${bairro} Cidade: ${cidade} - ${estado}`);
}

const imprimirEnderecoComQuebraDeLinha = (bairro, cidade, estado) => {
    console.log(`Bairro: ${bairro} \nCidade: ${cidade} - ${estado}`);
}

//Exemplo de Chamada as funções:
imprimirEndereco('Canasveiras', 'Florianópolis', 'SC');
imprimirEnderecoComQuebraDeLinha('Canasveiras', 'Florianópolis', 'SC');
/*--------------------------------------------------------------------------------------------------*/

/* Lista de pessoas para teste dos exercícios 13 a 16 */
const cidades = [
    {
        nome: 'Florianópolis',
        estado: 'SC'
    },
    {
        nome: 'São Lourenço do Oeste',
        estado: 'SC'
    },{
        nome: 'Pato Branco',
        estado: 'PR'
    },{
        nome: 'Francisco Beltrão',
        estado: 'PR'
    },{
        nome: 'Joinville',
        estado: 'SC'
    },
    {
        nome: 'Porto Alegre',
        estado: 'RS'
    }
]
/* */

/* 13 - Considerando uma entidade Cidade, contendo os seguintes atributos nome e estado, 
crie uma função que receba uma lista de cidades e retorne a lista de cidades em que o estado seja “SC”. */

const listarCidadesDeSantaCatarina = cidades => {
    return cidades.filter(cidade => cidade.estado === 'SC');
}

//Exemplo de Chamada as funções:
console.log("Cidades de Santa Catarina: ", listarCidadesDeSantaCatarina(cidades));
/*--------------------------------------------------------------------------------------------------*/

/* 14 - Considerando a entidade Cidade do exercício 13: [SP04] 13 - Filtrar Cidades crie uma função que 
recebe uma lista de cidades e retorna uma lista com os nomes das cidades concatenados com o seu estado. */

const concatenarCidadeComEstado = cidades => {
    return cidades.map(cidade => cidade.nome + ' - ' + cidade.estado);
}

const concatenarCidadeComEstadoComTemplateString = cidades => {
    return cidades.map(cidade => `${cidade.nome} - ${cidade.estado}`);
}

//Exemplo de Chamada as funções:
console.log("Cidades: ", concatenarCidadeComEstado(cidades));
console.log("Cidades com Template String: ", concatenarCidadeComEstadoComTemplateString(cidades));
/*--------------------------------------------------------------------------------------------------*/

/* 15 - 
Novamente considerando a entidade Cidade do exercício 13: [SP04] 13 - Filtrar Cidades crie uma função que 
receba uma lista de cidades e verifique se alguma das cidades é do estado “RS”, retornando o resultado. */

const verificarExisteCidadeDoRioGrandeDoSul = cidades => {
    return cidades.some(cidade => cidade.estado === 'RS');
}

//Exemplo de Chamada as funções:
console.log("Existe Cidade do Rio Grande do Sul? ", verificarExisteCidadeDoRioGrandeDoSul(cidades));
/*--------------------------------------------------------------------------------------------------*/

/* 16 - Considerando a entidade Cidade do exercício 13: [SP04] 13 - Filtrar Cidades crie uma função que 
receba um objeto cidade e atribua nome e o estado a duas variáveis e imprima elas no console. */

const imprimirCidade = cidade => {
    const {nome, estado} = cidade;
    console.log("Nome: ", nome);
    console.log("Estado: ", estado);
}

const imprimirCidadeComTemplateString = cidade => {
    const {nome, estado} = cidade;
    console.log(`Nome: ${nome} Estado: ${estado}`)
}

//Exemplo de Chamada as funções:
const cidade = {
    nome: 'Porto Alegre',
    estado: 'RS'
}

imprimirCidade(cidade);
imprimirCidade({nome: 'Blumenau', estado: 'SC'});
imprimirCidadeComTemplateString(cidade);
imprimirCidadeComTemplateString({nome: 'Blumenau', estado: 'SC'});
/*--------------------------------------------------------------------------------------------------*/

/* 17 - Crie uma função que apresente o ranking dos livros mais vendidos. 
Você precisa diferenciar a posição apenas dos 3 primeiros do ranking, os demais serão apenas listados. */

function imprimirLivrosMaisVendidos(maisVendido, segundoMaisVendido, terceiroMaisVendido, ...outrosLivros) {
    console.log("Livro Mais Vendido: ", maisVendido);
    console.log("Segundo Livro Mais Vendido: ", segundoMaisVendido);
    console.log("Terceiro Livro Mais Vendido: ", terceiroMaisVendido);
    
    console.log("Os demais livros da lista foram: ", outrosLivros);
}

const imprimirLivrosMaisVendidosComIteracao = (maisVendido, segundoMaisVendido, terceiroMaisVendido, ...outrosLivros) => {
    console.log("Livro Mais Vendido: ", maisVendido);
    console.log("Segundo Livro Mais Vendido: ", segundoMaisVendido);
    console.log("Terceiro Livro Mais Vendido: ", terceiroMaisVendido);
    
    console.log("Os demais livros da lista foram: ");
    outrosLivros.forEach(livro => console.log(`\t${livro}`));
}

//Exemplo de Chamada as funções:
imprimirLivrosMaisVendidos('Rangers','A Arte da Guerra','Inferno','O Código da Vinci','O Símbolo Perdido','Fortaleza Digital','Ponto de Impacto');
imprimirLivrosMaisVendidosComIteracao('Rangers','A Arte da Guerra','Inferno','O Código da Vinci','O Símbolo Perdido','Fortaleza Digital','Ponto de Impacto');
/*--------------------------------------------------------------------------------------------------*/