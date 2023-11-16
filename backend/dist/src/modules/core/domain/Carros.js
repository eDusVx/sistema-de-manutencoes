"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carros = void 0;
class Carros {
    constructor(id) {
        this.id = id;
    }
    static create(props) {
        const id = Math.floor(Math.random() * 1000);
        const instance = new Carros(id);
        try {
            instance.setMarca(props.marca);
            instance.setModelo(props.modelo);
            instance.setAno(props.ano);
            instance.setUsuario(props.usuario);
            instance.setManutencoes(props.manutencoes);
        }
        catch (e) {
            return e;
        }
        return instance;
    }
    static carregar(props, id) {
        const instance = new Carros(id);
        try {
            instance.setMarca(props.marca);
            instance.setModelo(props.modelo);
            instance.setAno(props.ano);
            instance.setUsuario(props.usuario);
            instance.setManutencoes(props.manutencoes);
        }
        catch (e) {
            return e;
        }
        return instance;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    setAno(ano) {
        this.ano = ano;
    }
    setUsuario(usuario) {
        this.usuario = usuario;
    }
    setManutencoes(manutencoes) {
        this.manutencoes = manutencoes;
    }
    registrarManutencao(manutencoes) {
        const antigasManutencoes = this.manutencoes;
        antigasManutencoes.push(manutencoes);
        this.setManutencoes(antigasManutencoes);
    }
    getId() {
        return this.id;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    getAno() {
        return this.ano;
    }
    getUsuario() {
        return this.usuario;
    }
    getManutencoes() {
        return this.manutencoes;
    }
}
exports.Carros = Carros;
//# sourceMappingURL=Carros.js.map