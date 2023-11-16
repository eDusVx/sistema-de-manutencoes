import { Inject, Logger } from '@nestjs/common'
import { CarroRepository } from '../../domain/repositories/Carro.repository'

export interface DeletarCarroUseCaseRequest {
    carroId: number
}

export class DeletarCarroUseCase {
    private logger = new Logger('DeletarCarroUseCase')

    constructor(
        @Inject('CarroRepository')
        private readonly carroRepository: CarroRepository,
    ) {}
    async execute(request: DeletarCarroUseCaseRequest): Promise<string> {
        try {
            await this.carroRepository.deletarCarro(request.carroId)

            this.logger.debug(`Carro ${request.carroId} removido com sucesso!`)
            return `Carro ${request.carroId} removido com sucesso!`
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
