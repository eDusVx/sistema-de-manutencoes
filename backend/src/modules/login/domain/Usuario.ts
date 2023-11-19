export interface UsuarioProps {
    nome: string
    email: string
    senha: string
}

export class Usuario {
    private nome: string
    private cpf: string
    private email: string
    private senha: string

    private constructor(cpf: string) {
        this.cpf = cpf
    }

    public static create(props: UsuarioProps, cpf: string) {
        const instance = new Usuario(cpf)

        try {
            instance.setEmail(props.email)
            instance.setSenha(props.senha)
            instance.setNome(props.nome)
        } catch (e) {
            throw e
        }

        return instance
    }

    private setEmail(email: string) {
        try {
            if (!email) throw new Error('Email não informado!')
            this.email = email
        } catch (e) {
            throw e
        }
    }

    private setSenha(senha: string) {
        try {
            if (!senha) throw new Error('Senha não informada!')
            this.senha = senha
        } catch (e) {
            throw e
        }
    }

    private setNome(nome: string) {
        try {
            if (!nome) throw new Error('Nome não informado!')
            this.nome = nome
        } catch (e) {
            throw e
        }
    }

    public getEmail() {
        return this.email
    }

    public getSenha() {
        return this.senha
    }

    public getCpf() {
        return this.cpf
    }

    public getNome() {
        return this.nome
    }
}
