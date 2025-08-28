class Livro {
    titulo;
    autor;
    paginas;
    constructor(_titulo, _autor, _paginas) {
        this.titulo = _titulo;
        this.autor = _autor;
        this.paginas = _paginas;
    }
    ler() {
        console.log(`Lendo o livro "${this.titulo}" de ${this.autor}, que tem ${this.paginas} páginas.`);
    }
    exibirDetalhes() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`);
    }
}
export default Livro;
//# sourceMappingURL=Livro.js.map