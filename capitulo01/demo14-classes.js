class Heroi{
    atacar(){
        console.log(`Atacou!`);
    }

    defender(){
        console.log(`Defendeu!`);
    }
}

const heroi = new Heroi();

heroi.atacar()
heroi.defender()

class Heroi2{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    atacar(){
        console.log(`O ${this.nome} atacou!`);
    }
}

const heroi2 = new Heroi2('Flash', 30)
heroi2.atacar()
