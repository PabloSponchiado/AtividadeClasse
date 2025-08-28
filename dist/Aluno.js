class Aluno {
    nome;
    matricula;
    curso;
    constructor(_nome, _matricula, _curso) {
        this.nome = _nome;
        this.matricula = _matricula;
        this.curso = _curso;
    }
    estudar(materia) {
        console.log(`${this.nome} está estudando ${materia}.`);
    }
    entregarAtividade() {
        console.log(`O aluno ${this.nome} entregou a atividade`);
    }
}
export default Aluno;
//# sourceMappingURL=Aluno.js.map