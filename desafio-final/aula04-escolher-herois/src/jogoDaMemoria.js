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
        this.iconePadrao = './arquivos/dota-2-sym.png'
        this.itensEscondidos = []
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

    embaralhar() {
        const copiaItens = this.itensDota
            //duplica os itens
            .concat(this.itensDota)
            // entra em cada item e cria um ID
            .map(item => {
                //Copio a lista e crio um id randomico
                return Object.assign({}, item, { id: Math.random() / 0.5 })
            })
            //ordena aleatoriamente
            .sort((itemA, itemB) => {
                return itemA.id - itemB.id
            })

        this.tela.atualizarImagens(copiaItens)

        //console.log( this.esconderItens(copiaItens))
        console.log(copiaItens)

        //this.esconderItens(copiaItens)
        // espera 5 seg pra esconder
        setTimeout(() => {
            this.esconderItens(copiaItens)
        }, 3000)

    }

    esconderItens(itensDota) {
        //trocar a imagem de todos os itens pelo icone padrão
        // como fizemos no construtor, vamos extrair apenas o necessario
        // sintaxe ({chave: 1}) estamos falando que vamos retornar
        // o que estiver dentro dos parenteses
        // quando usamos o mesmo nome o JS entende que um equivale ao outro nos valores
        // coloca entre parenteses pra retornar o objeto na mesma linha
        // cons x = lista.map({chave: 1}) => ({})
        const itensOcultos = itensDota.map(({ nome, id  }) =>({
            nome,
            id,
            img: this.iconePadrao

        }))
        // atualizamos a te com os herois ocultos
        this.tela.atualizarImagens(itensOcultos)

        // guardamos os herois para trabalhar com eles depois
        this.itensOcultos = itensOcultos
    }

    jogar() {
        this.embaralhar()
        console.log('Jogo iniciado!')
    }
}