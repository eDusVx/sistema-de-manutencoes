import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ManutencoesModel } from '../models/Manutencoes.model'
import { Manutencoes } from '../../domain/Manutencoes'
import { SolucoesMapper } from './Solucoes.mapper'
import { SolucoesModel } from '../models/Solucoes.model'
import { format } from 'date-fns-tz'

@Injectable()
export class ManutencoesMapper {
    private logger = new Logger('ManutencoesMapper')
    constructor(
        @InjectRepository(ManutencoesModel)
        private readonly manutencoesModel: Repository<ManutencoesModel>,
        @InjectRepository(SolucoesModel)
        private readonly solucoesModel: Repository<SolucoesModel>,
        private readonly solucoesMapper: SolucoesMapper,
    ) {}
    modelToDomain(manutencoesModel: ManutencoesModel) {
        const solucoes = this.solucoesMapper.modelToDomain(
            manutencoesModel.solucoes,
        )

        const manutencoes = Manutencoes.carregar(
            {
                descricao: manutencoesModel.descricao,
                solucoes: solucoes,
                data: new Date(manutencoesModel.data),
            },
            manutencoesModel.id,
        )

        return manutencoes
    }

    async domainToModel(
        manutencoes: Manutencoes,
        carroId: number,
    ): Promise<ManutencoesModel> {
        try {
            const solucoesModel = await this.solucoesMapper.domainToModel(
                manutencoes.getSolucoes(),
            )
            await this.solucoesModel.save(solucoesModel)

            const manutencaoModel = this.manutencoesModel.create({
                id: manutencoes.getId(),
                descricao: manutencoes.getDescricao(),
                solucoes: solucoesModel,
                data: format(manutencoes.getData(), 'yyyy-MM-dd HH:mm:ssXXX', {
                    timeZone: 'America/Sao_Paulo',
                }),
                carro: { id: carroId },
            })
            await this.manutencoesModel.save(manutencaoModel)

            return manutencaoModel
        } catch (error) {
            this.logger.error(error)
            throw error
        }
    }
}
