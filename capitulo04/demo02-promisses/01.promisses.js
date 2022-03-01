const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

//usando callback
// terminal.question('Qual é seu nome?\n', nome =>{
//     terminal.question('Qual seu telefone?\n', telefone =>{
//         console.log(`
//         Nome: ${nome},
//         Telefone: ${telefone}
//         `)
//         terminal.close()
//     })
// })

//encapsulando a questão, usando promisse em vez de callback
// ele sempre vai devolver um Promise com resolve
// ele chama uma promisse com resolve como callback
function questionAsync(textoPergunta){
    return new Promise((resolve, reject) =>{
        terminal.question(`${textoPergunta}\n`, resolve)
    })
}

let nome = ''
let telefone = ''
// Usamos logo o resolve() para executar logo a funcao com o 1 primeiro texto
Promise.resolve()
        .then(() => questionAsync('Qual seu nome?'))
        .then(respostaNome => {
            if(!respostaNome) throw new Error('Campo vazio!!')
            nome = respostaNome
        })
        .then(() => questionAsync('Qual seu telefone'))
        .then(resultadoTelefone => {
            if(!resultadoTelefone) throw new Error('Campo vazio!')
            telefone = resultadoTelefone
        })
        .then(() => {
            console.log(`Nome: ${nome}\nTelefone: ${telefone}`)
        })
        .catch(error =>{
            console.error('Deu ruim visse', error.stack)
        })
        .finally(() => terminal.close())
/*
        Unico problema que as variaveis nome, telefone são globais
        pode ocorrer de vc nao saber alterou essas vars (side effect error)
*/