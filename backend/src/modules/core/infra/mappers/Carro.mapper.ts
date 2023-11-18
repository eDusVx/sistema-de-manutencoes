import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Carro } from '../../domain/Carro'
import { UsuarioMapper } from './Usuario.mapper'
import { Manutencao } from '../../domain/Manutencao'
import { CarroModel } from '../models/Carro.model'
import { ManutencaoMapper } from './Manutencoes.mapper'
import { ManutencaoModel } from '../models/Manutencao.model'

@Injectable()
export class CarroMapper {
    private logger = new Logger('CarroMapper')
    constructor(
        @InjectRepository(CarroModel)
        private readonly carroModel: Repository<CarroModel>,
        private readonly usuarioMapper: UsuarioMapper,
        private readonly manutencaoMapper: ManutencaoMapper,
    ) {}
    modelToDomain(carroModel: CarroModel) {
        const manutencoes: Manutencao[] = []
        if (carroModel.manutencoes) {
            carroModel.manutencoes.map((c) => {
                const manutencao = this.manutencaoMapper.modelToDomain(c)
                manutencoes.push(manutencao)
            })
        }
        const usuario = this.usuarioMapper.modelToDomain(carroModel.usuario)
        const carro = Carro.carregar(
            {
                marca: carroModel.marca,
                modelo: carroModel.modelo,
                ano: carroModel.ano,
                usuario: usuario,
                manutencoes: manutencoes,
            },
            carroModel.id,
        )
        return carro
    }

    async domainToModel(carro: Carro): Promise<CarroModel> {
        try {
            const manutencoesModel: ManutencaoModel[] = []
            if (carro.getManutencoes()) {
                await Promise.all(
                    carro.getManutencoes().map(async (m) => {
                        const manutencaoModel =
                            await this.manutencaoMapper.domainToModel(
                                m,
                                carro.getId(),
                            )
                        manutencoesModel.push(manutencaoModel)
                    }),
                )
            }

            const usuarioModel = await this.usuarioMapper.domainToModel(
                carro.getUsuario(),
            )
            const carroModel = this.carroModel.create({
                id: carro.getId(),
                marca: carro.getMarca(),
                modelo: carro.getModelo(),
                ano: carro.getAno(),
                usuario: usuarioModel,
                manutencoes: manutencoesModel,
            })

            return carroModel
        } catch (error) {
            this.logger.error(error)
            throw error
        }
    }
}
