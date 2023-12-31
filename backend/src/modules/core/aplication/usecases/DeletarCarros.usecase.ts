import { Inject, Logger } from '@nestjs/common'
import { CarroRepository } from '../../domain/repositories/Carro.repository'

export interface DeletarCarroUseCaseRequest {
    carroId: string
}

export class DeletarCarroUseCase {
    private logger = new Logger('DeletarCarroUseCase')

    constructor(
        @Inject('CarroRepository')
        private readonly carroRepository: CarroRepository,
    ) {}
    async execute(request: DeletarCarroUseCaseRequest): Promise<string> {
        try {
            if (!request || !request.carroId)
                throw new Error('Parâmetros inválidos ou não informados!')

            await this.carroRepository.deletarCarro(request.carroId)

            this.logger.debug(
                `DeletarCarroUseCase executado com sucesso com parametros:${JSON.stringify(
                    request,
                    null,
                    0,
                )}`,
            )

            return `Carro ${request.carroId} removido com sucesso!`
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
