//metodos statics nao acessam o this
const util = Util
const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagemOk"
const CLASSE_INVISIVEL = "invisible"
const CLASSE_VISIVEL = "visible"
const ID_CONTADOR = "contador"
const ID_CARREGGANDO = "carregando"
const ID_BTN_MOSTRARTUDO = "mostrarTudo"

const MENSSAGENS = {
    sucesso: {
        texto: 'Combinação correta!',
        classe: 'alert-sucess' //classe do bootstrap

    },

    erro : {
        texto: 'Combinação incorreta!',
        classe: 'alert-danger' //classe do bootstrap

    }
}

class Tela {

    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="${item.nome}">
                <div class="card-body">
                </div>
            </div>
            <br>
        </div>`
        // return `
        // <div class="col-md-3">
        //     <div class="card" style="width: 50%;">
        //         <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="${item.nome}">
        //         <div class="card-body">
        //         <h5 class="card-title">${item.nome}</h5>
        //         </div>
        //     </div>
        //     <br>
        // </div>`
    }

    //gera imagem DIVs de acordo com os valores
    static gerarStringHTMLPelaImagem(itens) {
        //para cada item da lista, vai executar a fn obterCodigoHtml (card)
        // ao final junta tudo em uma string
        return itens.map(Tela.obterCodigoHtml).join('')
    }

    // coloca na DIV as imagens geradas
    static alterarConteudoHtml(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }

    //Joga o HTML na tela com o codigo das DIVs
    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)
    }

    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick

    }

    static configurarBotaoVerificarSelecao(funcaoOnClick) {
        window.verificarSelecao = funcaoOnClick
    }

    static configurarBotaoMostrarTudo(funcaoOnClick){
        const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRARTUDO)
        btnMostrarTudo.onclick = funcaoOnClick
    }

    static exibirItensDota(nomeItem, img) {
        //pega o elemento da tela pelo nome
        const elementosHtml = document.getElementsByName(nomeItem)

        // para cada elemento encontrado vamos alterar o src pra alterar a img
        elementosHtml.forEach(itemEncontrado => (itemEncontrado.src = img))
    }
    
    // passou nenhum parametro usa true
    static async exibirMensagem(sucesso = true){
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso){
            elemento.classList.remove(MENSSAGENS.erro.classe)
            elemento.classList.add(MENSSAGENS.sucesso.classe)
            elemento.innerHTML = MENSSAGENS.sucesso.texto
        }
        else{
            elemento.classList.remove(MENSSAGENS.sucesso.classe)
            elemento.classList.add(MENSSAGENS.erro.classe)
            elemento.innerHTML = MENSSAGENS.erro.texto

        }
        elemento.classList.remove(CLASSE_INVISIVEL)
        await util.timeout(2000)
        elemento.classList.add(CLASSE_INVISIVEL)
    }

    //fn do spinner
    static exibirCarregando(mostrar = true){
        const carregando = document.getElementById(ID_CARREGGANDO)
        if(mostrar){
            carregando.classList.remove(CLASSE_INVISIVEL)
            //carregando.classList.add(CLASSE_VISIVEL)
        }else{
            carregando.classList.add(CLASSE_INVISIVEL) 
        }
        
        
    }

    static iniciarContador(){
        let contarAte = 3
        const elementoContador = document.getElementById(ID_CONTADOR)
        // vamos substituir o texto começando $$contador segundos
        // onde está $$contador vamos add o valor (âncora)
        const identificadorTexto ="$$contador"
        const textoPadrao = `Começando em ${identificadorTexto} segundos...`

        const atualizarTexto = () => 
        (elementoContador.innerHTML = textoPadrao.replace(identificadorTexto, contarAte--))

        atualizarTexto()
        //cada segundo vai chamar a funcao
        //ela vai subtituir o $$contador pelo 'contarAte' decrementando
        //retorna o idIntervalo pra parar ele mais tarde
        const idDoIntervalo = setInterval(atualizarTexto, 1000)
        return idDoIntervalo
    }

    static limparContador(idDoIntervalo){
        clearInterval(idDoIntervalo)
        document.getElementById(ID_CONTADOR).innerHTML = ""
    }


}