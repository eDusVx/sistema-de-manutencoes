import { Carro } from '../Carro'

export interface CarroRepository {
    saveCarro(carro: Carro): Promise<string>
    searchCarro(id: string): Promise<Carro>
    deletarCarro(id: string): Promise<string>
}
