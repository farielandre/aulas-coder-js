// // TERNÁRIO

// const temp = 20

// if (temp > 30) {
//     console.log('Dia quente')
// } else {
//     console.log('dia agradável')
// }

// temp > 30 ? console.log('Dia quente') : console.log('dia agradável 2') // mais simples

// // OPERADOR END && 

// const pessoa = {
//     nome: 'Samira',
//     idade: 23
// }

// pessoa.idade > 20 && console.log(pessoa.nome)
// pessoa.idade > 20 && console.log(pessoa.vampiro || 'Não é vampiro')

// // DESESTRUTURAÇÃO 

// const pessoa = {
//     nome: 'Samira',
//     idade: 23
// }

// const { nome, idade } = pessoa // a mesma coisa mais simples

// SPREAD 

const pessoa = {
    nome: 'Fari',
    idade: 35
}

const profissional = {
    profissao: 'Designer',
    salario: 1235
}

const infos = { // SPREAD é tipo um concatenar pra objetos
    ...pessoa,
    ...profissional,
    salario: 1520,
    endereco: 'Rua XXXXX'
}

console.log(infos)