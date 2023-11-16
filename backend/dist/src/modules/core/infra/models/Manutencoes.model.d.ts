import { CarrosModel } from './Carros.model';
import { SolucoesModel } from './Solucoes.model';
export declare class ManutencoesModel {
    id: number;
    descricao: string;
    data: string;
    carro: CarrosModel;
    solucoes: SolucoesModel;
}
