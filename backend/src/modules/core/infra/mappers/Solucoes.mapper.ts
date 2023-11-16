import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { SolucoesModel } from '../models/Solucoes.model'
import { Solucoes } from '../../domain/Solucoes'

@Injectable()
export class SolucoesMapper {
    private logger = new Logger('SolucoesMapper')
    constructor(
        @InjectRepository(SolucoesModel)
        private readonly solucoesModel: Repository<SolucoesModel>,
    ) {}
    modelToDomain(solucoesModel: SolucoesModel) {
        const solucoes = Solucoes.carregar(
            {
                descricao: solucoesModel.descricao,
                gastos: solucoesModel.gastos,
            },
            solucoesModel.id,
        )
        return solucoes
    }

    async domainToModel(solucoes: Solucoes): Promise<SolucoesModel> {
        try {
            const solucoesModel = this.solucoesModel.create({
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
