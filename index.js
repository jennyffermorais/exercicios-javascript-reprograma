// ******************converter de metros para centímetros******************
let valorEmMetros = prompt(
  "Digite o valor em metros (não use vírgula, use ponto): "
);
let valorEmCentimetros = Number(valorEmMetros) * 100;
console.log("Equivale a " + valorEmCentimetros + " centímetros");

// ******************calcular aumento do salário******************
let salario = Number(prompt("Digite o valor do salário: "));
let percentualAumento = Number(prompt("Digite o percentual de aumento: "));

let valorAumento = salario * (percentualAumento / 100);
let resultado = (salario + valorAumento).toFixed(2);

console.log("O valor do novo salário é: " + resultado);
console.log("O valor do aumento é: " + valorAumento);

// ******************calcular desconto do produto******************
let preco = Number(prompt("Digite o valor do produto: "));
let percentualDesconto = Number(prompt("Digite o percentual de desconto: "));

let valorDesconto = preco * (percentualDesconto/ 100);
let resultado = (preco - valorDesconto).toFixed(2);

console.log("O valor do produto é: " + resultado);
console.log("O valor do desconto é: " + valorDesconto);

// ******************calcular o tempo da viagem******************
let distancia = Number(prompt("Digite o valor da distância: "));
let velocidadeMedia = Number(prompt("Digite a velocidade média: "));

let tempo = distancia / velocidadeMedia;

let horas = parseInt(tempo);

let minutos = parseInt((tempo - horas) * 60);

alert("O tempo da viagem será: " + horas  + " hora(s) e " + minutos + " minutos");

// ******************FizzBuzz******************
// primeira forma
let numero = Number(prompt("Digite um número: "));
if (numero % 3 === 0 && numero % 5 === 0) {
  console.log("FizzBuzz");
} else if (numero % 3 === 0) {
  console.log("Fizz");
} else if (numero % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(numero);
}

//segunda forma
let numero = Number(prompt("Digite um número: "));
let resultado = "";

if (numero % 3 === 0) {
  resultado = "Fizz";
}

if (numero % 5 === 0) {
  resultado += "Buzz";
}

if (resultado === "") {
  resultado = numero;
}

console.log(resultado);
