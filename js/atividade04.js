// Livro favorito

function livroFavorito() {
    class Livro {
        constructor(titulo, corCapa, lancamento, paginas) {
            this.titulo = titulo;
            this.cor = corCapa;
            this.ano = lancamento;
            this.paginas = paginas;
        }
        descricaoCompleta() {
            console.log(`O livro "${this.titulo}" tem a capa de cor ${this.cor}, foi lançado no ano de ${this.ano} e possui ${this.paginas} páginas`)
        }
    }
    const livroUser = new Livro(prompt('Digite o título do seu livro favorito:').toUpperCase(), prompt('Qual a cor da capa dele?'), prompt('Em que ano ele foi lançado?'), prompt('Possui quantas páginas?'));
    livroUser.descricaoCompleta();
}

