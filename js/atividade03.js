// Calculadora de parcelas

function calcParcelas() {
    let numero1 = parseInt(prompt('Vamos saber quanto dará sua compra ao dividir em parcelas? Primeiro, digite o valor total de sua compra:'));
    let numero2 = parseInt(prompt('Agora, digite o número de parcelas que deseja:'));

    if (isNaN(numero1) || isNaN(numero2)){ // Validação antes de executar o restante do código
        console.log('Você não digitou um número. Digite um número.')
        return; // Return para parar a execução do código caso caia na validação acima
    }
    if (numero2 > 1) {
        for (let i = 2; i <= numero2; i++) {
            let resultado = parseFloat(numero1 / i).toFixed([2]);
            console.log(`Se você parcelar sua compra em ${i} vezes, dará R$${resultado} sem juros por parcela`)
        }
    } 
    else {
        console.log(`O valor de sua compra em 1 vez é R$${parseFloat(numero1).toFixed([2])}`)
    }
} 