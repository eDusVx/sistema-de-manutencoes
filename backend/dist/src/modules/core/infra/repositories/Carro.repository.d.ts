import { Repository } from 'typeorm';
import { CarrosModel } from '../models/Carros.model';
import { Carros } from '../../domain/Carros';
import { CarroRepository } from '../../domain/repositories/Carro.repository';
import { CarroMapper } from '../mappers/Carro.mapper';
import { ManutencoesModel } from '../models/Manutencoes.model';
import { SolucoesModel } from '../models/Solucoes.model';
export declare class CarroRepositoryImpl implements CarroRepository {
    private readonly carroModel;
    private readonly solucoesModel;
    private readonly manutencoesModel;
    private readonly carroMapper;
    private logger;
    constructor(carroModel: Repository<CarrosModel>, solucoesModel: Repository<SolucoesModel>, manutencoesModel: Repository<ManutencoesModel>, carroMapper: CarroMapper);
    saveCarro(carro: Carros): Promise<string>;
    searchCarro(id: number): Promise<Carros>;
    deletarCarro(id: number): Promise<string>;
}
