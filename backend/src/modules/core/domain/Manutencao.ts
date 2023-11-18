import { Solucao } from './Solucao'
import { v4 as uuidv4 } from 'uuid'
export interface ManutencaoProps {
    problema: string
    solucao: Solucao
    data: Date
}

export class Manutencao {
    private id: string
    private problema: string
    private solucao: Solucao
    private data: Date

    private constructor(id: string) {
        this.id = id
    }

    public static create(props: ManutencaoProps): Manutencao {
        const id = uuidv4()
        const instance = new Manutencao(id)

        try {
            instance.setProblema(props.problema)
            instance.setSolucao(props.solucao)
            instance.setData(props.data)
        } catch (e) {
            throw e
        }

        return instance
    }

    public static carregar(props: ManutencaoProps, id: string): Manutencao {
        const instance = new Manutencao(id)

        try {
            instance.setProblema(props.problema)
            instance.setSolucao(props.solucao)
            instance.setData(props.data)
        } catch (e) {
            throw e
        }

        return instance
    }
    private setProblema(problema: string) {
        try {
            if (!problema) throw new Error('Descrição não informada!')
            this.problema = problema
        } catch (e) {
            throw e
        }
    }

    private setSolucao(solucao: Solucao) {
        try {
            if (!solucao) throw new Error('Solções não informadas!')
            this.solucao = solucao
        } catch (e) {
            throw e
        }
    }

    private setData(data: Date) {
        try {
            if (!data) throw new Error('Data não informada!')
            this.data = data
        } catch (e) {
            throw e
        }
    }

    public getId() {
        return this.id
    }

    public getProblema() {
        return this.problema
    }

    public getSolucao() {
        return this.solucao
    }

    public getData() {
        return this.data
    }
}
