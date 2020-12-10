import { somar } from './18 - Modulos';

class Calculadora {
    constructor(valor1, valor2, operacao) {
        this._valor1 = valor1;
        this._valor2 = valor2;
        this._operacao = operacao;
    }

    calcular() {
        if (this._operacao = 'soma') {
            return somar(this._valor1, this._valor2);
        }
    }
}

const calculadora = new Calculadora(10, 20, 'soma');
calculadora.calcular();