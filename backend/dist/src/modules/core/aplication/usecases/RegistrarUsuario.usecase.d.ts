import { UsuarioRepository } from '../../domain/repositories/Usuario.repository';
export interface RegistrarUsuarioUseCaseRequest {
    cpf: string;
    nome: string;
    email: string;
    senha: string;
}
export declare class RegistrarUsuarioUseCase {
    private readonly usuarioRepository;
    private logger;
    constructor(usuarioRepository: UsuarioRepository);
    execute(request: RegistrarUsuarioUseCaseRequest): Promise<string>;
}
