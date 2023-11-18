import { Carro } from '../Carro'

export interface CarroRepository {
    saveCarro(carro: Carro): Promise<string>
    searchCarro(id: number): Promise<Carro>
    deletarCarro(id: number): Promise<string>
}
