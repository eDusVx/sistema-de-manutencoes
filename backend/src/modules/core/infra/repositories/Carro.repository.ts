import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CarrosModel } from '../models/Carros.model'
import { Carros } from '../../domain/Carros'
import { CarroRepository } from '../../domain/repositories/Carro.repository'
import { CarroMapper } from '../mappers/Carro.mapper'
import { ManutencoesModel } from '../models/Manutencoes.model'
import { SolucoesModel } from '../models/Solucoes.model'

@Injectable()
export class CarroRepositoryImpl implements CarroRepository {
    private logger = new Logger('CarroRepository')
    constructor(
        @InjectRepository(CarrosModel)
        private readonly carroModel: Repository<CarrosModel>,
        @InjectRepository(SolucoesModel)
        private readonly solucoesModel: Repository<SolucoesModel>,
        @InjectRepository(ManutencoesModel)
        private readonly manutencoesModel: Repository<ManutencoesModel>,
        private readonly carroMapper: CarroMapper,
    ) {}
    async saveCarro(carro: Carros): Promise<string> {
        try {
            const carroModelResult = await this.carroMapper.domainToModel(carro)
            await this.carroModel.save(carroModelResult)
            return 'Usuário cadastrado com sucesso!'
        } catch (e) {
            this.logger.error('Erro ao converter domínio para modelo:', e)
            throw e
        }
    }
    async searchCarro(id: number): Promise<Carros> {
        try {
            const carroModel = await this.carroModel.findOne({
                where: { id: id },
                relations: {
                    usuario: true,
                    manutencoes: { solucoes: true },
                },
            })

            const carroDomain = this.carroMapper.modelToDomain(carroModel)

            return carroDomain
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
    async deletarCarro(id: number): Promise<string> {
        try {
            const carroModel = await this.carroModel.findOne({
                where: { id: id },
                relations: { manutencoes: { solucoes: true } },
            })
            if (carroModel) {
                await Promise.all(
                    carroModel.manutencoes.map(async (m) => {
                        const solucao: SolucoesModel = m.solucoes
                        await this.manutencoesModel.remove(m)
                        await this.solucoesModel.remove(solucao)
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
