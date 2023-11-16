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
            return e
        }

        return instance
    }
    private setNome(nome: string) {
        this.nome = nome
    }
    private setEmail(email: string) {
        this.email = email
    }
    private setSenha(senha: string) {
        this.senha = senha
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
