class JogoDaMemoria {
    //se mandar um obj = { tela: 1, idade: 2 , etc: 3}
    //vai ginorar o resto das propriedades e pegar somente a propriedade
    //tela
    constructor({ tela, util }) {
        this.tela = tela,
        this.util = util
        // caminho relativo referente ao index.html
        this.itensDota = [
            { img: './arquivos/teleport.png', nome: 'Teleport' },
            { img: './arquivos/scepter.png', nome: 'Scepter' },
            { img: './arquivos/quellingblade.png', nome: 'QuellingBlade' },
            { img: './arquivos/tango.png', nome: 'Tango' }
        ]
        this.iconePadrao = './arquivos/dota-2-sym.png'
        this.itensEscondidos = []
        this.itensSelecionados = []
    }
    //para usar o this, não podemos usar static
    inicializar() {
        // vai pegar todas as funcoes da classe tela!
        // coloca todos os itens iniciais na tela!
        this.tela.atualizarImagens(this.itensDota)
        //força a tela a usar o THIS de jogo da memoria, 
        // logo executar a função 'jogar' da classe jogoDaMemoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        // da tela passa o contexto do jogo da memoria
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))

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
        // console.log(copiaItens)

        //this.esconderItens(copiaItens)
        // espera 5 seg pra esconder (sem promise)
        setTimeout(() => {
            this.esconderItens(copiaItens)
        }, 3000)

        this.tela.exibirCarregando(false)
        // com promise n ta funfando
        // await this.util.timeout(1000)
        // this.esconderItens(copiaItens)
        

    }

    esconderItens(itensDota) {
        //trocar a imagem de todos os itens pelo icone padrão
        // como fizemos no construtor, vamos extrair apenas o necessario
        // sintaxe ({chave: 1}) estamos falando que vamos retornar
        // o que estiver dentro dos parenteses
        // quando usamos o mesmo nome o JS entende que um equivale ao outro nos valores
        // coloca entre parenteses pra retornar o objeto na mesma linha
        // cons x = lista.map({chave: 1}) => ({})
        const itensOcultos = itensDota.map(({ nome, id }) => ({
            nome,
            id,
            img: this.iconePadrao

        }))
        // atualizamos a te com os herois ocultos
        this.tela.atualizarImagens(itensOcultos)

        // guardamos os herois para trabalhar com eles depois
        this.itensOcultos = itensOcultos

        //console.log(itensOcultos)
    }

    exibirItensDota(nomeDoItem) {
        // mostra os itens quando a combinação é correta
        //usa essa sintaxe pra extrair apenas a imagem do objeto
        const { img } = this.itensDota.find(({ nome }) => nomeDoItem === nome)

        this.tela.exibirItensDota(nomeDoItem, img)
    }

    verificarSelecao(id, nome) {
        const item = { id, nome }
        // vamos verficar a qtd de itens selecionados
        // tomar uma acao se escolheu certo ou errado
        const itensSelecionados = this.itensSelecionados.length

        switch (itensSelecionados) {
            case 0:
                // adciona o item na lista, pois está vazia
                this.itensSelecionados.push(item)
                break;
            case 1:
                // se a qtd de escolhidos for 1, significa
                // que o usuario só pode escolher mais 1
                // vamos obtero primeiro item da lista

                // sintaxe que pega o item 0 itensselecionados[0] da lista, primeiro item da lista
                // precisar interar pelo for ou map etc
                const [opcao1] = this.itensSelecionados
                //zerar itnes para nao selecionar mais de dois
                this.itensSelecionados = []

                if (opcao1.nome === item.nome && opcao1.id !== item.id) {
                    //alert('combinação correta!' + item.nome)
                    this.exibirItensDota(item.nome)
                    // como o padrão é true n precissa passar nada
                    this.tela.exibirMensagem()
                    return;
                }

                //alert('combinação incorreta!')
                this.tela.exibirMensagem(false)
                break;

            default:
                break;
        }
    }

    jogar() {
        this.embaralhar()
        console.log('Jogo iniciado!')
    }
}