import { Solucoes } from './Solucoes'

export interface ManutencoesProps {
    descricao: string
    solucoes: Solucoes
    data: Date
}

export class Manutencoes {
    private id: number
    private descricao: string
    private solucoes: Solucoes
    private data: Date
    private constructor(id: number) {
        this.id = id
    }

    public static create(props: ManutencoesProps): Manutencoes {
        const id = Math.floor(Math.random() * 1000)
        const instance = new Manutencoes(id)

        try {
            instance.setDescricao(props.descricao)
            instance.setSolucoes(props.solucoes)
            instance.setData(props.data)
        } catch (e) {
            return e
        }

        return instance
    }

    public static carregar(props: ManutencoesProps, id: number): Manutencoes {
        const instance = new Manutencoes(id)

        try {
            instance.setDescricao(props.descricao)
            instance.setSolucoes(props.solucoes)
            instance.setData(props.data)
        } catch (e) {
            return e
        }

        return instance
    }
    private setDescricao(descricao: string) {
        this.descricao = descricao
    }
    private setSolucoes(solucoes: Solucoes) {
        this.solucoes = solucoes
    }

    private setData(data: Date) {
        this.data = data
    }

    public getId() {
        return this.id
    }

    public getDescricao() {
        return this.descricao
    }

    public getSolucoes() {
        return this.solucoes
    }

    public getData() {
        return this.data
    }
}
