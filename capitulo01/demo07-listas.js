const minhaLista = []
const minhaListaDeTarefas = [
    'mandar email',
    'colocar comida pro dog',
    'limpar quarto'
]

console.log(minhaListaDeTarefas);
console.log(minhaListaDeTarefas.length);

//adicionar item
minhaListaDeTarefas.push('formatar PC')
console.log(minhaListaDeTarefas)

//remover ultimo item
// const ultimo = minhaListaDeTarefas.pop()
// console.log(ultimo)

//remover um item especifico a partir de um indice
//qual item de inicio
// quantos itens remover
minhaListaDeTarefas.splice(2, 1)
console.log(minhaListaDeTarefas);

const itens =[
    1, 'computador', 0.22
]

// console.log(typeof itens);// retorna object
//verifica se eh array
// console.log(Array.isArray(itens));

// const letras = ['c', 'b', 'd', 'h', 'a']
// console.log(letras.sort());

// const novo = itens.concat([1,0.3, 3])
// console.log(novo);

//junta arrays  numa string
console.log(itens.join(','));




