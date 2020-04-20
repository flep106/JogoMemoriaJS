//meses começam do 0

const dataAniversario = new Date(2020,0,20)
console.log(dataAniversario);

const primeiraData = new Date(0)

console.log(primeiraData);

const hoje = new Date()
console.log(hoje.toString());
console.log(hoje.toDateString()); //YYYY-M-DD hh:mm:ss
console.log(hoje.toLocaleDateString());//YYYY-M-DD
console.log(hoje.toISOString());

const dia = hoje.getDate();
hoje.setDate(dia + 5) //+5 dias depois de hoje
//hoje.setHours(10, 30,0)
console.log(hoje);

console.log(`
Dia: ${hoje.getDay()}
Mes: ${hoje.getMonth()}
Ano: ${hoje.getFullYear()}
Hora: ${hoje.getHours()}
Minuto: ${hoje.getMinutes()}
Segundo: ${hoje.getSeconds()}
`);



