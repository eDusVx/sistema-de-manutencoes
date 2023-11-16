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
            return e
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
            return e
        }

        return instance
    }
    private setMarca(marca: string) {
        this.marca = marca
    }
    private setModelo(modelo: string) {
        this.modelo = modelo
    }
    private setAno(ano: string) {
        this.ano = ano
    }
    private setUsuario(usuario: Usuario) {
        this.usuario = usuario
    }
    private setManutencoes(manutencoes: Manutencoes[]) {
        this.manutencoes = manutencoes
    }
    public registrarManutencao(manutencoes: Manutencoes) {
        const antigasManutencoes = this.manutencoes
        antigasManutencoes.push(manutencoes)
        this.setManutencoes(antigasManutencoes)
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
