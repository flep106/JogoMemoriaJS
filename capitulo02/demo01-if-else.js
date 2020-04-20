const args = process.argv;
const saldo = args[args.length -1];



if(isNaN(saldo)){
    console.log('Valor inválido');
    return;
}

console.log('args', args);
console.log('saldo', saldo);