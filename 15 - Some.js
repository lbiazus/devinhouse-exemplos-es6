
const existeMonstroPerigoso = monstros =>
monstros.some(monstro => monstro.grau > 7)

const existeMonstroInofensivo = monstros =>
monstros.some(monstro => monstro.classificacao === 'Inofensivo')




