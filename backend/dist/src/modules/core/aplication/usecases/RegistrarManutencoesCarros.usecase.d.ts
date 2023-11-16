import { CarroRepository } from '../../domain/repositories/Carro.repository';
export interface RegistrarManutencoesCarroUseCaseRequest {
    idcarro: number;
    descricao: string;
    solucoes: {
        descricao: string;
        gastos: number;
    };
}
export declare class RegistrarManutencoesCarroUseCase {
    private readonly carroRepository;
    private logger;
    constructor(carroRepository: CarroRepository);
    execute(request: RegistrarManutencoesCarroUseCaseRequest): Promise<string>;
}
