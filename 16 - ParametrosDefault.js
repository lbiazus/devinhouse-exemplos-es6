

const criarFuncionario = (funcionario, nome, idade) => {
    return {...funcionario, nome: nome, idade: idade}
}


const criarFuncionario = (funcionario, nome = 'A definir', idade = 0) => {
    return {...funcionario, nome: nome, idade: idade}
}




