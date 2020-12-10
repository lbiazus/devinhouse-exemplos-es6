
const monstros = [
    {
      tipo: 'Vampiro',
      grau: 9
    },
    {
      tipo: 'Lobisomem',
      grau: 8
    },
    {
      tipo: 'Ogro',
      grau: 4
    }
  ]
  
const classificarMonstros = monstros => {
    return monstros.map(monstro => 
        ({...monstro, 
            classificacao: monstro.grau > 7 ? 'Perigoso' : 'Inofensivo' }))
}

classificarMonstros(monstros);