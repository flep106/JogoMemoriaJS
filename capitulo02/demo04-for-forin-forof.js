minhaLista = [
{
    id: parseInt(Math.random() * 10),
    nome: 'Joao',
    superPoder: 'Veloz'
},
{
    id: parseInt(Math.random() * 10),
    nome: 'Zezinho',
    superPoder: 'Força'
}
]
//classico
for (let index = 0; index < minhaLista.length; index++) {
    const item = minhaLista[index];
    console.log(`
    nome: ${item.nome}
    poder: ${item.superPoder}
    `);
    
    
}

//não usa contador FORIN
for (const index in minhaLista) {
    const item = minhaLista[index]
    console.log('Nome: ',item.nome);
}
console.log('\n');

//não usa index FOROF foreach
for (const item of minhaLista) {
    console.log('Nome:', item.nome,', Poder:', item.superPoder);
    
}
