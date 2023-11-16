import { Repository } from 'typeorm';
import { ManutencoesModel } from '../models/Manutencoes.model';
import { Manutencoes } from '../../domain/Manutencoes';
import { SolucoesMapper } from './Solucoes.mapper';
import { SolucoesModel } from '../models/Solucoes.model';
export declare class ManutencoesMapper {
    private readonly manutencoesModel;
    private readonly solucoesModel;
    private readonly solucoesMapper;
    private logger;
    constructor(manutencoesModel: Repository<ManutencoesModel>, solucoesModel: Repository<SolucoesModel>, solucoesMapper: SolucoesMapper);
    modelToDomain(manutencoesModel: ManutencoesModel): Manutencoes;
    domainToModel(manutencoes: Manutencoes, carroId: number): Promise<ManutencoesModel>;
}
