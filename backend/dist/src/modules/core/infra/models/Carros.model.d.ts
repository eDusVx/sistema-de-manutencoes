import { UsuariosModel } from './Usuario.model';
import { ManutencoesModel } from './Manutencoes.model';
export declare class CarrosModel {
    id: number;
    marca: string;
    modelo: string;
    ano: string;
    usuario: UsuariosModel;
    manutencoes: ManutencoesModel[];
}
