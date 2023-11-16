import { UsuarioRepository } from '../../domain/repositories/Usuario.repository';
import { CarroRepository } from '../../domain/repositories/Carro.repository';
export interface RegistrarCarroUseCaseRequest {
    marca: string;
    modelo: string;
    ano: string;
    usuarioId: string;
}
export declare class RegistrarCarroUseCase {
    private readonly carroRepository;
    private readonly usuarioRepository;
    private logger;
    constructor(carroRepository: CarroRepository, usuarioRepository: UsuarioRepository);
    execute(request: RegistrarCarroUseCaseRequest): Promise<string>;
}
