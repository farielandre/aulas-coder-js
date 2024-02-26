//Declarando e chamando uma função

// function minhaFuncao(num1, num2, num3){ // declarando parametros dentro do ()
//     let resultado = num1 + num2 * num3;
//     console.log(resultado);
// }

// minhaFuncao(1,2,3); // declarando valores que serão substituídos na função acima
// minhaFuncao(12,6,5); // ela só aceita a quantidade de valores declarados na propria função, nesse caso 3 valores

// //Função para descobrir se o numero é par ou impar

// function parOuImpar(){
//     let numeroUser = parseInt(prompt('Digite seu numero'));
//     if (numeroUser % 2 === 0) {
//         alert('seu numero é par = ' + numeroUser)
//     } else {
//         alert('seu numero é ímpar = ' + numeroUser)
//     }
// }

// parOuImpar()
// parOuImpar()
// parOuImpar()


// //Exercício calculadora

// let resultado = 0;
// function calculadora (){
//     let num1 = parseInt(prompt('Informe o primeiro número'));
//     let operador = prompt('Informe a operação: +, -, * ou /');
//     let num2 = parseInt(prompt('Informe o segundo número'));

//     if (operador === '+') {
//         return resultado = num1 + num2;
//     } else if (operador === '*') {
//         return resultado = num1 * num2;
//     } else if (operador === '/') {
//         return resultado = num1 / num2;
//     } else if (operador === '-') {
//         return resultado = num1 - num2;
//     }
// }

// calculadora()
// console.log(resultado)

// // Exercício Qual número é maior?

// function numeroMaior() {
//     let num1 = parseInt(prompt('Digite o primeiro numero'));
//     let num2 = parseInt(prompt('Digite o segundo numero'));

//     if (num1 > num2) {
//         let resultado = num1 - num2;
//         console.log('O numero maior é: ' + num1);
//         console.log('A subtração entre os dois números digitados é: ' + resultado);
//     } else {
//         console.log('O numero menor é: ' + num2)
//     }
// }

// numeroMaior()


// // Função normal

// function somar(primeiroNumero, segundoNumero) {
//     return primeiroNumero + segundoNumero;
// }

// console.log(somar(2,3))

// // Função anonima = O que muda é a posição do nome da função, o qual fica atribuido a uma variavel

// let soma = function (a, b) { return a + b }
// let subtrair = function (a, b) { return a - b }

// console.log('A soma é: ' + soma(15, 20))
// console.log('A subtração é: ' + subtrair(15, 5))

// // Arrow function

// const minhaFuncao = (num1, num2) => {
//     console.log(num1 / num2);
// }

// minhaFuncao(10,4)

// // Exercício calculadora com Arrow Function

// let soma = (num1, num2) => {return num1 + num2}
// let subtracao = (num1, num2) => {return num1 - num2}
// let multiplicacao = (num1, num2) => {return num1 * num2}
// let divisao = (num1, num2) => {return num1 / num2}

// let calculadora = () => {
//     let num1 = parseInt(prompt('Informe o primeiro número'));
//     let operador = prompt('Informe a operação: +, -, * ou /');
//     let num2 = parseInt(prompt('Informe o segundo número'));

//     if (operador === '+') {
//         return soma(num1, num2);
//     } else if (operador === '*') {
//         return multiplicacao(num1, num2);
//     } else if (operador === '/') {
//         return divisao(num1, num2);
//     } else if (operador === '-') {
//         return subtracao(num1, num2);
//     }
// }

// console.log(calculadora ())

