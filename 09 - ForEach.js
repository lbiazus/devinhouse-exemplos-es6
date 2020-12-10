function imprimirRanking(vencedor, segundo, terceiro, ...demaisCompetidores) {
    console.log("Vencedor: ", vencedor);
    console.log("Segundo Colocado: ", segundo);
    console.log("Terceiro Colocado: ", terceiro);
    
    console.log("Os demais competidores foram: ");
    demaisCompetidores.forEach(competidor => console.log(competidor));
}

imprimirRanking('Godofredo','Ariosvalo','Marieta','Fred','Vilma','Barney','Pedrita');

function calcular(operacao, ...numeros) {
    let resultado = operacao === 'multiplicacao' ? 1 : 0;
    if (operacao !== 'soma' && operacao !== 'multiplicacao') {
        return 'Operação desejada não implementada';
    }
    numeros.forEach(numero => {
        if (operacao === 'soma') {
            resultado += numero;
        } else if (operacao === 'multiplicacao') {
            resultado *= numero; 
        }
    });
  return resultado;
}