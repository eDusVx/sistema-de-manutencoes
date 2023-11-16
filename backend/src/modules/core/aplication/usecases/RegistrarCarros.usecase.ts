import { Inject, Logger } from '@nestjs/common'
import { UsuarioRepository } from '../../domain/repositories/Usuario.repository'
import { CarroRepository } from '../../domain/repositories/Carro.repository'
import { Carros } from '../../domain/Carros'

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
            const buscarUsuarios = await this.usuarioRepository.searchUsuario(
                request.usuarioId,
            )
            const carro = Carros.create({
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
