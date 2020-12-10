
const todosMonstrosSaoPerigosos = monstros =>
    monstros.every(monstro => monstro.grau > 7)

const todosMonstrosSaoInofensivos = monstros =>
    monstros.every(monstro => monstro.classificacao === 'Inofensivo')




