function somaComVar() {
    var a = 1;
    if (true) {
        var b = 2;
    }
    var c = a + b;
    console.log("o valor da soma é: ", c);
}
  
function somaComLet() {
    let a = 1
    if (true) {
        let b = 2;
    }
    let c = a + b
    console.log("o valor da soma é: ", c);
}





function somaArray(numeros) {
    var origem = 10;
    for (var i = 0; i < numeros.length; i++) {
        if (i < numeros.length - 1) {
            var soma = numeros[i] + numeros[i + 1];
            console.log('i ', numeros[i] + numeros[i + 1]);
        }
    }
    var resultado = origem + soma;
    console.log('soma ', soma);
    console.log('resultado ', resultado);
}
















function somaArrayLet(numeros) {
    let origem = 10;
    for (let i = 0; i < numeros.length; i++) {
        if (i < numeros.length - 1) {
            let soma = numeros[i] + numeros[i + 1];
            console.log('i ', numeros[i] + numeros[i + 1]); 
        }
    }
    let resultado = origem + soma;
    console.log('soma ', soma);
    console.log('resultado ', resultado);
}