const somar = (operacao, ...numeros) => numeros.reduce((acc, corrente) => {
    if (operacao === 'soma') {
      return acc + corrente;
    }
    return acc * corrente;
  }, operacao === 'soma' ? 0 : 1);