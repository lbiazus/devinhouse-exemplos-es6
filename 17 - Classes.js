class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade
    }

    toString() {
        return `Nome: ${this._nome} idade: ${this._idade}`
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade);
        this._salario = salario;
    }

    get salario() {
        return this._salario;
    }

    toString() {
        return `Nome: ${this._nome} idade: ${this._idade} 
                    salário: ${this._salario}`
    }
}

    const funcionario = new Funcionario('Zé', 25, 3500);
funcionario.nome