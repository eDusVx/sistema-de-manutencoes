import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SolucaoModel } from '../models/Solucao.model'
import { Solucao } from '../../domain/Solucao'

@Injectable()
export class SolucaoMapper {
    private logger = new Logger('SolucoesMapper')
    constructor(
        @InjectRepository(SolucaoModel)
        private readonly solucaoModel: Repository<SolucaoModel>,
    ) {}
    modelToDomain(solucoesModel: SolucaoModel) {
        const solucoes = Solucao.carregar(
            {
                descricao: solucoesModel.descricao,
                gastos: solucoesModel.gastos,
            },
            solucoesModel.id,
        )
        return solucoes
    }

    async domainToModel(solucoes: Solucao): Promise<SolucaoModel> {
        try {
            const solucoesModel = this.solucaoModel.create({
                id: solucoes.getId(),
                descricao: solucoes.getDescricao(),
                gastos: solucoes.getGastos(),
            })
            return solucoesModel
        } catch (error) {
            this.logger.error(error)
            throw error
        }
    }
}
