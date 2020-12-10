function dividirValores(a,b) {
    return new Promise((resolve,reject) => {
        if (b > 0) {
            setTimeout(() => {resolve(a/b)}, 5000)
        } else {
            reject(`O valor de b é ${b} e não pode ser usado para divisão`)
        }
    })
}

async function calcular(a,b) {
    const resultado = await dividirValores(a,b);
    console.log("Resultado: ", resultado)
}

calcular(100,0);