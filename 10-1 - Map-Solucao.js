const despesas = [
    {
        descricao: 'Água',
        valor: 60
    },
    {
        descricao: 'Luz',
        valor: 50
    }
]

const valores = despesas.map(despesa => despesa.valor);

const totalGasto = valores.reduce((acumulador, corrente) => acumulador + corrente);