
const encontrarTodosMonstrosPerigosos = monstros =>
        monstros.filter(monstro => monstro.grau > 7)

const encontrarTodosMonstrosInofensivos = monstros =>
        monstros.find(monstro => monstro.classificacao === 'Inofensivo')




        