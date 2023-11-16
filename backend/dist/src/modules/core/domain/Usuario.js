"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(cpf) {
        this.cpf = cpf;
    }
    static create(props, cpf) {
        const instance = new Usuario(cpf);
        try {
            instance.setNome(props.nome);
            instance.setEmail(props.email);
            instance.setSenha(props.senha);
        }
        catch (e) {
            return e;
        }
        return instance;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setEmail(email) {
        this.email = email;
    }
    setSenha(senha) {
        this.senha = senha;
    }
    getCPF() {
        return this.cpf;
    }
    getNome() {
        return this.nome;
    }
    getEmail() {
        return this.email;
    }
    getSenha() {
        return this.senha;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map