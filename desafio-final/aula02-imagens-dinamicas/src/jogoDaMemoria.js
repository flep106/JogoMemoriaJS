class JogoDaMemoria {
    //se mandar um obj = { tela: 1, idade: 2 , etc: 3}
    //vai ginorar o resto das propriedades e pegar somente a propriedade
    //tela
    constructor({ tela }) {
        this.tela = tela
        // caminho relativo referente ao index.html
        this.itemsIniciais = [
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
        this.tela.atualizarImagens(this.itemsIniciais)
    }
}