export interface SolucoesProps {
    descricao: string
    gastos: number
}
export class Solucoes {
    private id: number
    private descricao: string
    private gastos: number
    private constructor(id: number) {
        this.id = id
    }

    public static create(props: SolucoesProps): Solucoes {
        const id = Math.floor(Math.random() * 1000)
        const instance = new Solucoes(id)

        try {
            instance.setDescricao(props.descricao)
            instance.setGastos(props.gastos)
        } catch (e) {
            throw e
        }

        return instance
    }

    public static carregar(props: SolucoesProps, id: number): Solucoes {
        const instance = new Solucoes(id)

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
