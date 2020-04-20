//Esse exemplo é com callback, recomendado usar promisses
const fs = require('fs')

fs.readFile('arquivo01.txt', (error1, resposta1) => {
    if(error1){
        console.error('Deu ruim... #arquivo1', error1.stack)
        return;
    }

    fs.readFile('arquivo02.txt', (error2, resposta2) => {
        if (error2) {
            console.error('Deu ruim... #arquivo2', error2.stack)
            return;
        }
        
        fs.readFile('arquivo03.txt', (error3, resposta3) =>{
            if (error3) {
                console.error('Deu ruim... #arquivo3', error3.stack)
                return;
            }
            const conteudo = `${resposta1}\n${resposta2}\n${resposta3}`
            // console.log('conteudo :', conteudo);

            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) =>{
                if (errorWrite) {
                    console.error('Deu ruim pra criar arquivo', errorWrite)
                    return;
                }
                console.log('Arquivo Criado com Sucesso!!')
            })
        })
    })

})
