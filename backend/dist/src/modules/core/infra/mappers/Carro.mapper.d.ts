import { Repository } from 'typeorm';
import { CarrosModel } from '../models/Carros.model';
import { Carros } from '../../domain/Carros';
import { UsuarioMapper } from './Usuario.mapper';
import { ManutencoesMapper } from './Manutencoes.mapper';
export declare class CarroMapper {
    private readonly carroModel;
    private readonly usuarioMapper;
    private readonly manutencoesMapper;
    private logger;
    constructor(carroModel: Repository<CarrosModel>, usuarioMapper: UsuarioMapper, manutencoesMapper: ManutencoesMapper);
    modelToDomain(carroModel: CarrosModel): Carros;
    domainToModel(carro: Carros): Promise<CarrosModel>;
}
