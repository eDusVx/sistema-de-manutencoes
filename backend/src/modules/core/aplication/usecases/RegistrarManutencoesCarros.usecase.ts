import { Inject, Logger } from '@nestjs/common'
import { Manutencao } from '../../domain/Manutencao'
import { CarroRepository } from '../../domain/repositories/Carro.repository'
import { Solucao } from '../../domain/Solucao'

export interface RegistrarManutencoesCarroUseCaseRequest {
    carroId: number
    problema: string
    solucao: {
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

            const solucoesDomain = Solucao.create({
                descricao: request.solucao.descricao,
                gastos: request.solucao.gastos,
            })

            const manutencoesDomain = Manutencao.create({
                problema: request.problema,
                solucao: solucoesDomain,
                data: new Date(),
            })

            buscarCarro.registrarManutencao(manutencoesDomain)

            await this.carroRepository.saveCarro(buscarCarro)

            this.logger.debug(
                `Manutenção ${request.problema} para o carro ${request.carroId} registrada com sucesso!`,
            )

            return `Manutenção ${request.problema} para o carro ${request.carroId} registrada com sucesso!`
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
