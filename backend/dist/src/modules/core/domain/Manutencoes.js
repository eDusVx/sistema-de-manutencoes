"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manutencoes = void 0;
class Manutencoes {
    constructor(id) {
        this.id = id;
    }
    static create(props) {
        const id = Math.floor(Math.random() * 1000);
        const instance = new Manutencoes(id);
        try {
            instance.setDescricao(props.descricao);
            instance.setSolucoes(props.solucoes);
            instance.setData(props.data);
        }
        catch (e) {
            return e;
        }
        return instance;
    }
    static carregar(props, id) {
        const instance = new Manutencoes(id);
        try {
            instance.setDescricao(props.descricao);
            instance.setSolucoes(props.solucoes);
            instance.setData(props.data);
        }
        catch (e) {
            return e;
        }
        return instance;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    setSolucoes(solucoes) {
        this.solucoes = solucoes;
    }
    setData(data) {
        this.data = data;
    }
    getId() {
        return this.id;
    }
    getDescricao() {
        return this.descricao;
    }
    getSolucoes() {
        return this.solucoes;
    }
    getData() {
        return this.data;
    }
}
exports.Manutencoes = Manutencoes;
//# sourceMappingURL=Manutencoes.js.map