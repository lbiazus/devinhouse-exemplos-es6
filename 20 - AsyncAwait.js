function dividirValores(a,b) {
    return new Promise((resolve,reject) => {
        if (b > 0) {
            setTimeout(() => {resolve(a/b)}, 5000)
        } else {
            reject(`O valor de b é ${b} e não pode ser usado para divisão`)
        }
    })
}

function mostrarPrimeiro() {
    return "Primeiro";
}

function mostrarSegundo() {
    return new Promise((resolve,reject) => {
        resolve('Segundo')
    })
}

function mostrarTerceiro() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve('Terceiro'),10000)
    })
}

console.log(mostrarPrimeiro());
mostrarSegundo().then(r => console.log(r));
mostrarTerceiro().then(r => console.log(r));

function dividirValores(a,b) {
        if (b > 0) {
            return setTimeout(a/b, 5000);
        } else {
            throw new Error(`O valor de b é ${b} e não pode ser usado para divisão`)
        }
}

async function calcular(a,b) {
    try {
        const resultado = await dividirValores(a,b).then(r => );
        console.log("Resultado: ", resultado);
    } catch (e) {
        console.log("Erro: ", e)
    }
}

calcular(100,10);