let numero1 = parseInt(prompt('Digite o primeiro numero'));
let numero2 = parseInt(prompt('Digite o segundo numero'));
let resultado = numero1 % numero2;

function multiplos() {
    if (resultado === 0){
        console.log(`${numero1} e ${numero2} são múltiplos. O resto é ${resultado}`)
    } else {
        console.log(`${numero1} e ${numero2} não são múltiplos. O resto é ${resultado}`)
    }
}

multiplos()