import { Inject, Logger } from '@nestjs/common'
import { UsuarioRepository } from '../../domain/repositories/Usuario.repository'
import { CarroRepository } from '../../domain/repositories/Carro.repository'
import { Carro } from '../../domain/Carro'

export interface RegistrarCarroUseCaseRequest {
    marca: string
    modelo: string
    ano: string
    usuarioId: string
}

export class RegistrarCarroUseCase {
    private logger = new Logger('RegistrarCarroUseCase')

    constructor(
        @Inject('CarroRepository')
        private readonly carroRepository: CarroRepository,
        @Inject('UsuarioRepository')
        private readonly usuarioRepository: UsuarioRepository,
    ) {}
    async execute(request: RegistrarCarroUseCaseRequest): Promise<string> {
        try {
            if (!request || !request.usuarioId)
                throw new Error('Parâmetros inválidos ou não informados!')

            const buscarUsuarios = await this.usuarioRepository.searchUsuario(
                request.usuarioId,
            )
            const carro = Carro.create({
                marca: request.marca,
                modelo: request.modelo,
                ano: request.ano,
                usuario: buscarUsuarios,
                manutencoes: [],
            })

            await this.carroRepository.saveCarro(carro)

            this.logger.debug(
                `Carro ${
                    request.modelo
                } de id ${carro.getId()} registrado com sucesso!`,
            )

            return `Carro ${
                request.modelo
            } de id ${carro.getId()} registrado com sucesso!`
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
