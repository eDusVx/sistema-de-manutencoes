import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CarroModel } from '../models/Carro.model'
import { Carro } from '../../domain/Carro'
import { CarroRepository } from '../../domain/repositories/Carro.repository'
import { CarroMapper } from '../mappers/Carro.mapper'
import { ManutencaoModel } from '../models/Manutencao.model'
import { SolucaoModel } from '../models/Solucao.model'

@Injectable()
export class CarroRepositoryImpl implements CarroRepository {
    private logger = new Logger('CarroRepository')
    constructor(
        @InjectRepository(CarroModel)
        private readonly carroModel: Repository<CarroModel>,
        @InjectRepository(ManutencaoModel)
        private readonly manutencoesModel: Repository<ManutencaoModel>,
        @InjectRepository(SolucaoModel)
        private readonly solucaoModel: Repository<SolucaoModel>,
        private readonly carroMapper: CarroMapper,
    ) {}
    async saveCarro(carro: Carro): Promise<string> {
        try {
            const carroModelResult = await this.carroMapper.domainToModel(carro)
            await this.carroModel.save(carroModelResult)
            return 'Usuário cadastrado com sucesso!'
        } catch (e) {
            this.logger.error('Erro ao converter domínio para modelo:', e)
            throw e
        }
    }
    async searchCarro(id: string): Promise<Carro> {
        try {
            const carroModel = await this.carroModel.findOne({
                where: {
                    id: id,
                },
                relations: {
                    usuario: true,
                    manutencoes: {
                        solucao: true,
                    },
                },
            })

            const carroDomain = this.carroMapper.modelToDomain(carroModel)

            return carroDomain
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
    async deletarCarro(id: string): Promise<string> {
        try {
            const carroModel = await this.carroModel.findOne({
                where: { id: id },
                relations: { manutencoes: { solucao: true } },
            })

            if (carroModel) {
                await Promise.all(
                    carroModel.manutencoes.map(async (manutencao) => {
                        const solucoes = manutencao.solucao
                        await this.manutencoesModel.remove(manutencao)

                        if (solucoes) await this.solucaoModel.remove(solucoes)
                    }),
                )

                await this.carroModel.remove(carroModel)
            } else {
                throw new Error(`Nenhum carro encontrado com id ${id}`)
            }

            return `Carro ${id} removido com sucesso!`
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
