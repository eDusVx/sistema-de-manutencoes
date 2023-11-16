import { CarrosModel } from '../../infra/models/Carros.model';
import { Repository } from 'typeorm';
export interface BuscarCarrosQueryRequest {
    usuarioId: string;
}
export declare class BuscarCarrosQuery {
    private readonly carroModel;
    private logger;
    constructor(carroModel: Repository<CarrosModel>);
    execute(request: BuscarCarrosQueryRequest): Promise<CarrosModel[]>;
}
