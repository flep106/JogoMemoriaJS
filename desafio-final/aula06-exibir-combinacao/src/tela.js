const ID_CONTEUDO= "conteudo"
const ID_BTN_JOGAR = "jogar"

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
    static gerarStringHTMLPelaImagem(itens){
        //para cada item da lista, vai executar a fn obterCodigoHtml (card)
        // ao final junta tudo em uma string
        return itens.map(Tela.obterCodigoHtml).join('')
    }

    // coloca na DIV as imagens geradas
    static alterarConteudoHtml(codigoHtml){
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }

    //Joga o HTML na tela com o codigo das DIVs
    static atualizarImagens(itens){
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)
    }

    static configurarBotaoJogar(funcaoOnClick){
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick

    }

    static configurarBotaoVerificarSelecao(funcaoOnClick){
        window.verificarSelecao = funcaoOnClick
    }

    static exibirItensDota(nomeItem, img){
        //pega o elemento da tela pelo nome
        const elementosHtml = document.getElementsByName(nomeItem)

        // para cada elemento encontrado vamos alterar o src pra alterar a img
        elementosHtml.forEach(itemEncontrado => (itemEncontrado.src = img))
    }
}