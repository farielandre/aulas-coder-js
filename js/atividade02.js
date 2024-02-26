// Calculadora de juros compostos. A fórmula dos juros compostos é M = C * (1 + i)^t

function jurosComposto(){
    const valorInicial = parseInt(prompt('Digite o valor inicial em R$'));
    const taxaJuros = parseInt(prompt('Qual a taxa mensal de juros em %? Digite apenas o numero.'));
    const periodoMeses = parseInt(prompt('Por quantos meses incidirão os juros?'));
    let montante = valorInicial * (1 + (taxaJuros / 100)) ** periodoMeses;
    alert('O valor total em' + ' ' + periodoMeses + ' ' + 'meses será de:' + ' ' + 'R$' + parseFloat(montante).toFixed([2]))
}

// Função para descobrir o signo

function descobrirSigno() {
    const mes = prompt('Digite o mês em que você nasceu por extenso (ex: Agosto)').toUpperCase(); // toUpperCase() para padronizar todos os nomes de meses e prevenir erros de maiúsculas/minúsculas.
    const dia = prompt('Digite o dia em que você nasceu (ex: 01, 04, 21)');
    const espaco = ' ';
    const primeiraLetraMaiuscula = mes.charAt(0).toUpperCase() + mes.slice(1).toLowerCase(); // Padronizando o resultado com iniciais maiúsculas

    const Aries = 'Áries';
    const Touro = 'Touro';
    const Gemeos = 'Gêmeos';
    const Cancer = 'Câncer';
    const Leao = 'Leão';
    const Virgem = 'Virgem';
    const Libra = 'Libra';
    const Escorpiao = 'Escorpião';
    const Sagitario = 'Sagitário';
    const Capricornio = 'Capricórnio';
    const Aquario = 'Aquário';
    const Peixes = 'Peixes';

    if (mes === 'MARÇO' && dia >= 21 || mes === 'ABRIL' && dia <= 19) { // Ref: Áries 21 mar - 19 abr
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Aries);

    } else if (mes === 'ABRIL' && dia >= 20 || mes === 'MAIO' && dia <= 20) { // Ref: Touro 20 abr - 20 mai
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Touro);

    } else if (mes === 'MAIO' && dia >= 21 || mes === 'JUNHO' && dia <= 20) { // Ref: Gêmeos 21 mai - 20 jun
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Gemeos);

    } else if (mes === 'JUNHO' && dia >= 21 || mes === 'JULHO' && dia <= 22) { // Ref: Câncer 21 jun - 22 jul
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Cancer);

    } else if (mes === 'JULHO' && dia >= 23 || mes === 'AGOSTO' && dia <= 22) { // LRef: eão 23 jul - 22 ago
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Leao);

    } else if (mes === 'AGOSTO' && dia >= 23 || mes === 'SETEMBRO' && dia <= 22) { // Ref: Virgem 23 ago - 22 set
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Virgem);

    } else if (mes === 'SETEMBRO' && dia >= 23 || mes === 'OUTUBRO' && dia <= 22) { // Ref: Libra 23 set - 22 out
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Libra);

    } else if (mes === 'OUTUBRO' && dia >= 23 || mes === 'NOVEMBRO' && dia <= 21) { // Ref: Escorpião 23 out - 21 nov
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Escorpiao);

    } else if (mes === 'NOVEMBRO' && dia >= 22 || mes === 'DEZEMBRO' && dia <= 21) { // Ref: Sagitário 22 nov - 21 dez
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Sagitario);

    } else if (mes === 'DEZEMBRO' && dia >= 22 || mes === 'JANEIRO' && dia <= 19) { // Ref: Capricórnio 22 dez - 19 jan
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Capricornio);

    } else if (mes === 'JANEIRO' && dia >= 20 || mes === 'FEVEREIRO' && dia <= 18) { // Ref: Aquário 20 jan - 18 fev
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Aquario);

    } else if (mes === 'FEVEREIRO' && dia >= 19 || mes === 'MARÇO' && dia <= 20) { // Ref: Peixes 19 fev - 20 mar
        alert('Data inserida:' + espaco + dia + '/' + primeiraLetraMaiuscula + '.' + espaco + 'Seu signo é:' + espaco + Peixes);

    } else {
        alert('Insira os dados conforme os exemplos.');
    }
}


// // // Arrow function

// // const minhaFuncao = (num1, num2) => {
// //     console.log(num1 / num2);
// // }