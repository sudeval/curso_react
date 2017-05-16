// na verdade essa classe é transformada em função js (não existe classe no js)
export default class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    toString() {
        return `Pessoa: ${this.nome}`;
    }
}