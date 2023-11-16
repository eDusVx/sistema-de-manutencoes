import { Inject, Logger } from '@nestjs/common'
import { Manutencoes } from '../../domain/Manutencoes'
import { CarroRepository } from '../../domain/repositories/Carro.repository'
import { Solucoes } from '../../domain/Solucoes'

export interface RegistrarManutencoesCarroUseCaseRequest {
    carroId: number
    descricao: string
    solucoes: {
        descricao: string
        gastos: number
    }
}

export class RegistrarManutencoesCarroUseCase {
    private logger = new Logger('RegistrarManutencaoUseCase')

    constructor(
        @Inject('CarroRepository')
        private readonly carroRepository: CarroRepository,
    ) {}
    async execute(
        request: RegistrarManutencoesCarroUseCaseRequest,
    ): Promise<string> {
        try {
            if (!request || !request.carroId)
                throw new Error('Parâmetros inválidos ou não informados!')

            const buscarCarro = await this.carroRepository.searchCarro(
                request.carroId,
            )

            const solucoesDomain = Solucoes.create({
                descricao: request.solucoes.descricao,
                gastos: request.solucoes.gastos,
            })

            const manutencoesDomain = Manutencoes.create({
                descricao: request.descricao,
                solucoes: solucoesDomain,
                data: new Date(),
            })

            buscarCarro.registrarManutencao(manutencoesDomain)
            await this.carroRepository.saveCarro(buscarCarro)

            this.logger.debug(
                `Manutenção ${request.descricao} para o carro ${request.carroId} registrada com sucesso!`,
            )
            return `Manutenção ${request.descricao} para o carro ${request.carroId} registrada com sucesso!`
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
