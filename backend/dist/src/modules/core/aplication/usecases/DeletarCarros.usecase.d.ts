import { CarroRepository } from '../../domain/repositories/Carro.repository';
export interface DeletarCarroUseCaseRequest {
    carroId: number;
}
export declare class DeletarCarroUseCase {
    private readonly carroRepository;
    private logger;
    constructor(carroRepository: CarroRepository);
    execute(request: DeletarCarroUseCaseRequest): Promise<string>;
}
