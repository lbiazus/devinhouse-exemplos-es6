const pessoa = {
    nome: 'Zé',
    idade: 30,
    profissao: 'Programador'
}

const novaPessoa = {...pessoa, nome: 'Leo'};

console.log("pessoa ", pessoa);
console.log("novaPessoa ", novaPessoa);


const nomes = ['Leo', 'Zé', 'Godofredo', 'Ariovaldo'];
const clonado = [...nomes];

console.log("nomes ", nomes);
console.log("clonado ", clonado);
console.log("Os Arrays são o mesmo?", nomes === clonado);


