export interface UsuarioProps {
    email: string
    senha: string
}

export class Usuario {
    private email: string
    private senha: string

    public static create(props: UsuarioProps) {
        const instance = new Usuario()

        try {
            instance.setEmail(props.email)
            instance.setSenha(props.senha)
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

    public getEmail() {
        return this.email
    }
    public getSenha() {
        return this.senha
    }
}
