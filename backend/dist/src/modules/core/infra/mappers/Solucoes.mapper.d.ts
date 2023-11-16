import { Repository } from 'typeorm';
import { SolucoesModel } from '../models/Solucoes.model';
import { Solucoes } from '../../domain/Solucoes';
export declare class SolucoesMapper {
    private readonly solucoesModel;
    private logger;
    constructor(solucoesModel: Repository<SolucoesModel>);
    modelToDomain(solucoesModel: SolucoesModel): Solucoes;
    domainToModel(solucoes: Solucoes): Promise<SolucoesModel>;
}
