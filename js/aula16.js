const item = document.getElementById('item')
const botaoSalvar = document.getElementById('botaoSalvar')
const itens = document.getElementById('itens')

let conjuntoItens = []

function salvarItens() {
    conjuntoItens.push(item.value)
    item.value = ''
    localStorage.setItem("Itens", JSON.stringify(conjuntoItens))
}

function mostrarItens() {
    conjuntoItens = []
    const itensLocalStorage = JSON.parse(localStorage.getItem('Itens'))

    itensLocalStorage.map((nome) => {
        const itemLocalStorage = document.createElement('li')
        itemLocalStorage.innerText = nome
        conjuntoItens.push(nome)
        itens.append(itemLocalStorage)
    })
}

function deleteNames() {
    localStorage.removeItem('conjuntoItens')
    itens.innerText = ""
}