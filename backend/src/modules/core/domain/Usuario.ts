export interface UsuarioProps {
    nome: string
    email: string
    senha: string
}

export class Usuario {
    private cpf: string
    private nome: string
    private email: string
    private senha: string

    private constructor(cpf: string) {
        this.cpf = cpf
    }

    public static create(props: UsuarioProps, cpf: string): Usuario {
        const instance = new Usuario(cpf)

        try {
            instance.setNome(props.nome)
            instance.setEmail(props.email)
            instance.setSenha(props.senha)
        } catch (e) {
            throw e
        }

        return instance
    }
    private setNome(nome: string) {
        try {
            if (!nome) throw new Error('Nome não informado!')
            this.nome = nome
        } catch (e) {
            throw e
        }
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

    public getCPF() {
        return this.cpf
    }

    public getNome() {
        return this.nome
    }
    public getEmail() {
        return this.email
    }
    public getSenha() {
        return this.senha
    }
}
