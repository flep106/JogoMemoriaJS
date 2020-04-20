const readLine = require('readline')
const terminal = readLine.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,

    //definir o modo de saida
    output: process.stdout
})

//texto menu
const textoMenu =`
Olá, seja bem vindo ao sistema de media

Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para sair\n`

// console.log('TextoMenu', textoMenu);

// terminal.question('Qual é seu nome?\n', (msg) => {
//     console.log('voce escreveu', msg);
//     terminal.close()
    
// })

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },

    opcao1: {
        texto: 'submenu! Pressione ENTER para selecionar mais opcoes... \n',
        fn: opcao1
    }
}

function opcao1(msg){
    console.log('Não há mais opções...');
    terminal.close()
    
}

function menuInicial(msg){
    //console.log('Acionando meun inicial', msg);
    const opcao = Number(msg)
    if(isNaN(opcao))
        throw new Error('Não é um número', msg)
    
    switch(opcao){
        case 0:
            console.log('Saindo...');
            terminal.close()

        case 1:
            console.log('Menu inicial');
        terminal.question(
            questoes.opcao1.texto,
            questoes.opcao1.fn
        )
            break;
        default:
            console.log('opcao inválida!');
            terminal.close()
            break;
            
    }
}



terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)
