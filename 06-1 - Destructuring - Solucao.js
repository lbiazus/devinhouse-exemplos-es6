const funcionario = {
    nome: 'Godofredo',
    idade: 25,
    cargo: 'Programador',
    salario: 4500
}

const imprimirFuncionario = funcionario => {
    const {nome, cargo, salario} = funcionario;
    console.log(`Nome: ${nome}, Cargo: ${cargo}, Salario: R$${salario}`)
}

imprimirFuncionario(funcionario);