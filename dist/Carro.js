class Carro {
    modelo;
    ano;
    cor;
    constructor(_modelo, _ano, _cor) {
        this.modelo = _modelo;
        this.ano = _ano;
        this.cor = _cor;
    }
    acelerar(velocidade) {
        console.log(`O carro ${this.modelo} está acelerando, com a velocidade ${velocidade} km/h`);
    }
    ligar() {
        const numeroAleatorio = Math.random();
        if (numeroAleatorio < 0.5) {
            return true;
        }
        else {
            return false;
        }
    }
}
export default Carro;
//# sourceMappingURL=Carro.js.map