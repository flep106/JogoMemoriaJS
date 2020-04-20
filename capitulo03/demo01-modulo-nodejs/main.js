const Matematica = require('./matematica')
//console.log(Matematica.somar(1,3));

const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

//É usada uma função dentro da outra, pq pega o valor1 do cliente e precisa fazer outra pegunta
terminal.question('Insira o primeiro valor\n', valor1 =>{
    terminal.question('Insira o segundo valor\n', valor2 =>{
        terminal.question('Digite a operação\n', operacao => {
            //                Classe[nomeFuncaoClasse]() -> () invocar
            const resultado = Matematica[operacao](
                Number(valor1),Number(valor2)
            )
            console.log(`
            A operação ${operacao} de ${valor1} e ${valor2} é: ${resultado}
            `);
            terminal.close()
        })
    })
})

/*
    Toda funcao no js pode ser autoinvokcada colocalando '()'
    pegamos a classe Matematica, invoquei a fn pelo metodo []
    depois coloquei o nome da funcao da classe
*/