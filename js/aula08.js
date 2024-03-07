// // Objeto 1

// const xicara = {
//     cor: 'branca',
//     capacidade: '200ml',
//     quebrada: true,
//     preco: 27.50
// }
// console.log('a xícara é:', xicara.cor);
// xicara.cor = 'amarela' // forma 1 de mudar a variável
// console.log('a xícara agora é:', xicara.cor);

// // Objeto 2

// const stopJogo = {
//     cidade: 'Floripa',
//     estado: 'SC',
//     país: 'Brasil',
//     numero: 1
// }

// console.log('a cidade é:', stopJogo.cidade);
// stopJogo['cidade'] = 'São Paulo' // forma 2 de mudar a variável
// console.log('a cidade agora é:', stopJogo.cidade);

// // Constructor e New

// function fruta(nome, cor, peso) {
//     this.nome = nome;
//     this.cor = cor;
//     this.peso = peso;
// }

// const fruta1 = new fruta("branca", 102, false);
// const fruta2 = new fruta("rosa", 200, true);

// console.log(fruta1)
// console.log(fruta2)

// // Métodos - REVISAR

// function fruta(nome, cor, peso) {
//     this.nome = nome;
//     this.cor = cor;
//     this.peso = peso;
//     detalhesFruta = function () {
//         console.log('A fruta: ' + this.nome + ' é ' + this.cor + ' e pesa: ' + this.peso)
//     }
// }
// const fruta1 = new fruta('arroz', 'branco', 123);
// console.log(detalhesFruta())

// // Classes e Métodos

// class Alimento {
//     constructor(nome, cor, peso) {
//         this.nome = nome;
//         this.cor = cor;
//         this.peso = peso;
//     }
//     descricao() {
//         console.log(`O alimento ${this.nome} é ${this.cor} e pesa ${this.peso}`)
//     }
// }
// const Alimento1 = new Alimento('arroz', 'branco', 123 + ' gramas');
// const Alimento2 = new Alimento('macarrão', 'amarelo', 100 + ' gramas');
// Alimento1.descricao();
// Alimento2.descricao();
