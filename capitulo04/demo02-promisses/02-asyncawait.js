const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

//encapsulando a questão, usando promisse em vez de callback
// ele sempre vai devolver um Promise com resolve
// ele chama uma promisse com resolve como callback
function questionAsync(textoPergunta){
    return new Promise((resolve, reject) =>{
        terminal.question(`${textoPergunta}\n`, msg =>{
            //Usando reject de promisse só basta usar new Error
            !!msg ? resolve(msg) : reject(new Error('O campo não pode vazio!')) 
        })
    })
}
//1- pra trabalhar com async o obj Promise tem que existir
async function main() {
    try {
        const nome = await questionAsync('Qual seu nomde?')
        const telefone = await questionAsync('Qual seu telefone?')
        console.log(`Nome: ${nome}, Telefone ${telefone}`)
    } catch (error) {
        console.log("Deu ruim...", error.stack)
    }
    finally{
        terminal.close()
    }
}

main()

