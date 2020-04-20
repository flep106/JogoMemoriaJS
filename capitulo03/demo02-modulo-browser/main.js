window.onload = () => {
    console.log('A tela carregou!', Matematica.subtrair(1,2));
    const btn = document.getElementById('btnCalcular');

    // btn.onclick = () => {
    //     console.log('clicou!');
        
    // }
    btn.onclick = click

    function obterValorInput(id){
        const item = document.getElementById(id)
        return item.value
    }

    function click(){
        const tipoOperacao = obterValorInput('tipoOperacao')
        const valor1 = obterValorInput('valor1')
        const valor2 = obterValorInput('valor2')
        //Não precisa converter pra number pq no html o tye está number
        const resultado = Matematica[tipoOperacao](
            valor1, valor2
        )
        console.log('Resultado: ', resultado);
        document.getElementById('resultado')
        .innerText = `
        A operação de ${tipoOperacao}, ${valor1} e ${valor2} é ${resultado}`        
        
        
    }
}