"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solucoes = void 0;
class Solucoes {
    constructor(id) {
        this.id = id;
    }
    static create(props) {
        const id = Math.floor(Math.random() * 1000);
        const instance = new Solucoes(id);
        try {
            instance.setDescricao(props.descricao);
            instance.setGastos(props.gastos);
        }
        catch (e) {
            return e;
        }
        return instance;
    }
    static carregar(props, id) {
        const instance = new Solucoes(id);
        try {
            instance.setDescricao(props.descricao);
            instance.setGastos(props.gastos);
        }
        catch (e) {
            return e;
        }
        return instance;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    setGastos(gastos) {
        this.gastos = gastos;
    }
    getId() {
        return this.id;
    }
    getDescricao() {
        return this.descricao;
    }
    getGastos() {
        return this.gastos;
    }
}
exports.Solucoes = Solucoes;
//# sourceMappingURL=Solucoes.js.map