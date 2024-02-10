// Exercício nome e sobrenome com variáveis

let nome = 'Fariel';
let sobreNome= 'Minozzo';
let ano = 2024;
let idadeAtual= 36;

console.log('Nome completo:', `${nome} ${sobreNome}`);
console.log('Ano que nasci:', ano - idadeAtual);

// Exercício cálculo no prompt e alert

let numero1 = prompt('Digite um numero');
let numero2 = prompt('Digite outro numero');
console.log(parseInt(numero1) * parseInt(numero2));
alert('O produto é:' + (parseInt(numero1) * parseInt(numero2)));