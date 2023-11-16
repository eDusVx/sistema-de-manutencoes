import { Manutencoes } from './Manutencoes'
import { Usuario } from './Usuario'

export interface CarrosProps {
    marca: string
    modelo: string
    ano: string
    usuario: Usuario
    manutencoes: Manutencoes[]
}

export class Carros {
    private id: number
    private marca: string
    private modelo: string
    private ano: string
    private usuario: Usuario
    private manutencoes: Manutencoes[]
    private constructor(id: number) {
        this.id = id
    }

    public static create(props: CarrosProps): Carros {
        const id = Math.floor(Math.random() * 1000)
        const instance = new Carros(id)

        try {
            instance.setMarca(props.marca)
            instance.setModelo(props.modelo)
            instance.setAno(props.ano)
            instance.setUsuario(props.usuario)
            instance.setManutencoes(props.manutencoes)
        } catch (e) {
            throw e
        }

        return instance
    }

    public static carregar(props: CarrosProps, id: number): Carros {
        const instance = new Carros(id)

        try {
            instance.setMarca(props.marca)
            instance.setModelo(props.modelo)
            instance.setAno(props.ano)
            instance.setUsuario(props.usuario)
            instance.setManutencoes(props.manutencoes)
        } catch (e) {
            throw e
        }

        return instance
    }

    private setMarca(marca: string) {
        try {
            if (!marca) throw new Error('Marca não informada!')
            this.marca = marca
        } catch (e) {
            throw e
        }
    }

    private setModelo(modelo: string) {
        try {
            if (!modelo) throw new Error('Modelo não informado!')
            this.modelo = modelo
        } catch (e) {
            throw e
        }
    }

    private setAno(ano: string) {
        try {
            if (!ano) throw new Error('Ano não informado!')
            this.ano = ano
        } catch (e) {
            throw e
        }
    }

    private setUsuario(usuario: Usuario) {
        try {
            if (!usuario) throw new Error('Usuário não informado!')
            this.usuario = usuario
        } catch (e) {
            throw e
        }
    }

    private setManutencoes(manutencoes: Manutencoes[]) {
        try {
            if (!manutencoes) throw new Error('Manutencoes não informadas!')
            this.manutencoes = manutencoes
        } catch (e) {
            throw e
        }
    }

    public registrarManutencao(manutencoes: Manutencoes) {
        try {
            if (!manutencoes)
                throw new Error(
                    'Novas manutencoes não informadas para registro!',
                )

            const antigasManutencoes = this.manutencoes
            antigasManutencoes.push(manutencoes)
            this.setManutencoes(antigasManutencoes)
        } catch (e) {
            throw e
        }
    }

    public getId() {
        return this.id
    }

    public getMarca() {
        return this.marca
    }

    public getModelo() {
        return this.modelo
    }

    public getAno() {
        return this.ano
    }

    public getUsuario() {
        return this.usuario
    }

    public getManutencoes() {
        return this.manutencoes
    }
}
