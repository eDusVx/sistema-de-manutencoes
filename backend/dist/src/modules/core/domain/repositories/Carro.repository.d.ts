import { Carros } from '../Carros';
export interface CarroRepository {
    saveCarro(carro: Carros): Promise<string>;
    searchCarro(id: number): Promise<Carros>;
    deletarCarro(id: number): Promise<string>;
}
