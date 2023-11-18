import { v4 as uuidv4 } from 'uuid'

export interface SolucoesProps {
    descricao: string
    gastos: number
}
export class Solucao {
    private id: string
    private descricao: string
    private gastos: number

    private constructor(id: string) {
        this.id = id
    }

    public static create(props: SolucoesProps): Solucao {
        const id = uuidv4()
        const instance = new Solucao(id)

        try {
            instance.setDescricao(props.descricao)
            instance.setGastos(props.gastos)
        } catch (e) {
            throw e
        }

        return instance
    }

    public static carregar(props: SolucoesProps, id: string): Solucao {
        const instance = new Solucao(id)

        try {
            instance.setDescricao(props.descricao)
            instance.setGastos(props.gastos)
        } catch (e) {
            throw e
        }

        return instance
    }
    private setDescricao(descricao: string) {
        try {
            if (!descricao) throw new Error('Descrição não informada!')
            this.descricao = descricao
        } catch (e) {
            throw e
        }
    }

    private setGastos(gastos: number) {
        try {
            if (!gastos) throw new Error('Gastos não informados!')
            this.gastos = gastos
        } catch (e) {
            throw e
        }
    }

    public getId() {
        return this.id
    }

    public getDescricao() {
        return this.descricao
    }
    public getGastos() {
        return this.gastos
    }
}
