class JogoDaMemoria {
    //se mandar um obj = { tela: 1, idade: 2 , etc: 3}
    //vai ginorar o resto das propriedades e pegar somente a propriedade
    //tela
    constructor({ tela }) {
        this.tela = tela
        // caminho relativo referente ao index.html
        this.itensDota = [
            { img: './arquivos/teleport.png', nome: 'Teleport' },
            { img: './arquivos/scepter.png', nome: 'Scepter' },
            { img: './arquivos/quellingblade.png', nome: 'QuellingBlade' },
            { img: './arquivos/tango.png', nome: 'Tango' }
        ]
    }
    //para usar o this, não podemos usar static
    inicializar() {
        // vai pegar todas as funcoes da classe tela!
        // coloca todos os itens iniciais na tela!
        this.tela.atualizarImagens(this.itensDota)
        //força a tela a usar o THIS de jogo da memoria, 
        // logo executar a função 'jogar' da classe jogoDaMemoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))

    }

    embaralhar(){
        const copiaItens = this.itensDota 
        //duplica os itens
        .concat(this.itensDota)
        // entra em cada item e cria um ID
        .map(item =>{
            //Copio a lista e crio um id randomico
            return Object.assign({}, item, { id: Math.random() / 0.5 })
        })
        //ordena aleatoriamente
        .sort((itemA, itemB) => {
            return itemA.id - itemB.id
        })

        this.tela.atualizarImagens(copiaItens)

    }

    jogar(){
        this.embaralhar()
        console.log('Jogo iniciado!')
    }
}