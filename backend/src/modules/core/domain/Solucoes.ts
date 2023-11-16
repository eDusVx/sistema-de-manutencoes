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
            return e
        }

        return instance
    }

    public static carregar(props: SolucoesProps, id: number): Solucoes {
        const instance = new Solucoes(id)

        try {
            instance.setDescricao(props.descricao)
            instance.setGastos(props.gastos)
        } catch (e) {
            return e
        }

        return instance
    }
    private setDescricao(descricao: string) {
        this.descricao = descricao
    }
    private setGastos(gastos: number) {
        this.gastos = gastos
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
