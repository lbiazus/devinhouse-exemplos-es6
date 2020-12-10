const pessoa = {
    nome: 'Zé',
    idade: 30,
    profissao: 'Programador'
}

const {nome, idade} = pessoa;

console.log("Nome:", nome);
console.log("Idade: ", idade);



const array = ['Leo', 'Zé', 'Godofredo', 'Ariovaldo'];
const [primeiro, segundo] = array;
const [, novoSegundo, terceiro] = array;

console.log("primeiro ", primeiro);
console.log("segundo ", segundo);
console.log("novoSegundo ", novoSegundo);
console.log("terceiro ", terceiro);