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
            if (!request || !request.cpf)
                throw new Error('Parâmetros inválidos ou não informados!')

            const usuario = Usuario.create(
                {
                    nome: request.nome,
                    email: request.email,
                    senha: request.senha,
                },
                request.cpf,
            )

            await this.usuarioRepository.saveUsuario(usuario)

            this.logger.debug(
                `RegistrarUsuarioUseCase executado com sucesso com parametros:${JSON.stringify(
                    request,
                    null,
                    0,
                )}`,
            )
            return `Usuario ${request.nome} cpf: ${request.cpf} registrado com sucesso!`
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
