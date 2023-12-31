import { Manutencao } from './Manutencao'
import { Usuario } from './Usuario'
import { v4 as uuidv4 } from 'uuid'

export interface CarroProps {
    marca: string
    modelo: string
    ano: string
    usuario: Usuario
    manutencoes: Manutencao[]
}

export class Carro {
    private id: string
    private marca: string
    private modelo: string
    private ano: string
    private usuario: Usuario
    private manutencoes: Manutencao[]

    private constructor(id: string) {
        this.id = id
    }

    public static create(props: CarroProps): Carro {
        const id = uuidv4()
        const instance = new Carro(id)

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

    public static carregar(props: CarroProps, id: string): Carro {
        const instance = new Carro(id)

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

    private setManutencoes(manutencao: Manutencao[]) {
        try {
            if (!manutencao) throw new Error('manutencao não informadas!')
            this.manutencoes = manutencao
        } catch (e) {
            throw e
        }
    }

    public registrarManutencao(manutencao: Manutencao) {
        try {
            if (!manutencao)
                throw new Error(
                    'Novas manutencões não informadas para registro!',
                )

            const antigasManutencoes = this.manutencoes
            antigasManutencoes.push(manutencao)
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
