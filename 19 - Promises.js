
function dividirValores(a,b) {
    return new Promise((resolve,reject) => {
        if (b > 0) {
            setTimeout(() => {resolve(a/b)}, 5000)
        } else {
            reject(`O valor de b é ${b} e não pode ser usado para divisão`)
        }
    })
}

dividirValores(100,10)
    .then(resultado => console.log("Resultado: ", resultado))
    .catch(mensagem => console.log('Catch: ', mensagem));



    