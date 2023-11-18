import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ManutencaoModel } from '../models/Manutencao.model'
import { Manutencao } from '../../domain/Manutencao'
import { format } from 'date-fns-tz'
import { SolucaoMapper } from './Solucoes.mapper'
import { SolucaoModel } from '../models/Solucao.model'

@Injectable()
export class ManutencaoMapper {
    private logger = new Logger('ManutencoesMapper')
    constructor(
        @InjectRepository(ManutencaoModel)
        private readonly ManutencaoModel: Repository<ManutencaoModel>,
        @InjectRepository(SolucaoModel)
        private readonly solucaoModel: Repository<SolucaoModel>,
        private readonly solucaoMapper: SolucaoMapper,
    ) {}
    modelToDomain(manutencaoModel: ManutencaoModel) {
        const solucao = this.solucaoMapper.modelToDomain(
            manutencaoModel.solucao,
        )

        const manutencoes = Manutencao.carregar(
            {
                problema: manutencaoModel.problema,
                solucao: solucao,
                data: new Date(manutencaoModel.data),
            },
            manutencaoModel.id,
        )

        return manutencoes
    }

    async domainToModel(
        manutencao: Manutencao,
        carroId: string,
    ): Promise<ManutencaoModel> {
        try {
            const solucaoModel = await this.solucaoMapper.domainToModel(
                manutencao.getSolucao(),
            )

            await this.solucaoModel.save(solucaoModel)

            const manutencaoModel = this.ManutencaoModel.create({
                id: manutencao.getId(),
                problema: manutencao.getProblema(),
                solucao: solucaoModel,
                data: format(manutencao.getData(), 'yyyy-MM-dd HH:mm:ssXXX', {
                    timeZone: 'America/Sao_Paulo',
                }),
                carro: {
                    id: carroId,
                },
            })
            await this.ManutencaoModel.save(manutencaoModel)

            return manutencaoModel
        } catch (error) {
            this.logger.error(error)
            throw error
        }
    }
}
