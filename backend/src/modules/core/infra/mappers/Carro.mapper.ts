import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CarrosModel } from '../models/Carros.model'
import { Carros } from '../../domain/Carros'
import { UsuarioMapper } from './Usuario.mapper'
import { ManutencoesMapper } from './Manutencoes.mapper'
import { ManutencoesModel } from '../models/Manutencoes.model'
import { Manutencoes } from '../../domain/Manutencoes'
import { format } from 'date-fns-tz'

@Injectable()
export class CarroMapper {
    private logger = new Logger('CarroMapper')
    constructor(
        @InjectRepository(CarrosModel)
        private readonly carroModel: Repository<CarrosModel>,
        private readonly usuarioMapper: UsuarioMapper,
        private readonly manutencoesMapper: ManutencoesMapper,
    ) {}
    modelToDomain(carroModel: CarrosModel) {
        const manutencoes: Manutencoes[] = []
        if (carroModel.manutencoes) {
            carroModel.manutencoes.map((c) => {
                const manutencao = this.manutencoesMapper.modelToDomain(c)
                manutencoes.push(manutencao)
            })
        }
        const usuario = this.usuarioMapper.modelToDomain(carroModel.usuario)
        const carro = Carros.carregar(
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

    async domainToModel(carro: Carros): Promise<CarrosModel> {
        try {
            const manutencoesModel: ManutencoesModel[] = []
            if (carro.getManutencoes()) {
                await Promise.all(
                    carro.getManutencoes().map(async (m) => {
                        const manutencaoModel =
                            await this.manutencoesMapper.domainToModel(
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
