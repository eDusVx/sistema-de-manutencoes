import { Inject, Logger } from '@nestjs/common'
import { Usuario } from '../../domain/Usuario'
import { UsuarioRepository } from '../../domain/repositories/Usuario.repository'

export interface RegistrarUsuarioUseCaseRequest {
    cpf: string
    nome: string
    email: string
    senha: string
}

export class RegistrarUsuarioUseCase {
    private logger = new Logger('RegistrarUsuarioUseCase')

    constructor(
        @Inject('UsuarioRepository')
        private readonly usuarioRepository: UsuarioRepository,
    ) {}
    async execute(request: RegistrarUsuarioUseCaseRequest): Promise<string> {
        try {
            const usuario = Usuario.create(
                {
                    nome: request.nome,
                    email: request.email,
                    senha: request.senha,
                },
                request.cpf,
            )
            await this.usuarioRepository.saveUsuario(usuario)

            return `Usuario ${request.nome} registrado com sucesso!`
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}