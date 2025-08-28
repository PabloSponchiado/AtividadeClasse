import Aluno from "./Aluno.js";

let aluno1: Aluno = new Aluno(
  "Pablo Sponchiado",
  20293,
  "Análise e Desenvolvimento de Sistemas"
);
let aluno2: Aluno = new Aluno("Ana Clara", 20294, "Engenharia de Software");

aluno1.estudar("Lógica de Programação");
aluno2.estudar("Banco de Dados");

aluno1.entregarAtividade();
aluno2.entregarAtividade();

import Livro from "./Livro.js";

let livro1: Livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1178);
let livro2: Livro = new Livro("1984", "George Orwell", 328);

livro1.ler();
livro2.ler();
livro1.exibirDetalhes();
livro2.exibirDetalhes();














import Carro from "./Carro.js";

let carro1: Carro = new Carro("Toyota Corolla", 2020, "Prata");
let carro2: Carro = new Carro("Honda Civic", 2019, "Preto");


let ligado1: boolean = carro1.ligar();
let ligado2: boolean = carro2.ligar();

if (ligado1) {
  carro1.acelerar(200);
}
else {
  console.log(`O carro ${carro1} não conseguiu ligar`);
}

if (ligado2) {
  carro2.acelerar(200);
}
