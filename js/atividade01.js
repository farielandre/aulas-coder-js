let primeiroNome = prompt('Digite seu primeiro nome:');
let sobreNome = prompt('Digite seu sobrenome:');
let espacoBranco = ' ';
let idade = prompt('Qual idade você terá até o fim de 2024?');
let nomeCompleto = primeiroNome + espacoBranco + sobreNome;
let anoNascimento = parseInt('2024') - idade;
let diasVividos = idade * parseInt('365');

// Documento HTML

let pegarNome = document.getElementById('nome__completo');
pegarNome.innerText = 'Nome Completo:' + espacoBranco + nomeCompleto;

let pegarIdade = document.getElementById('idade__2024');
pegarIdade.innerText = 'Idade:' + idade;

let pegarAno = document.getElementById('ano__nascimento');
pegarAno.innerText = 'Ano de nascimento:' + espacoBranco + anoNascimento;

let pegarDias = document.getElementById('dias__vividos');
pegarDias.innerText = 'Dias vivídos:' + espacoBranco + (diasVividos) + espacoBranco + 'dias';

// Console.log

console.log('Nome Completo:', nomeCompleto);
console.log('Idade:', idade);
console.log('Ano de nascimento:', anoNascimento);

// Alert

alert('Nome Completo:' + espacoBranco + nomeCompleto);
alert('Ano de nascimento:' + espacoBranco + anoNascimento);


