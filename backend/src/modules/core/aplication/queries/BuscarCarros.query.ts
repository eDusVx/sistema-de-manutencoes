import { Logger } from '@nestjs/common'
import { CarroModel } from '../../infra/models/Carro.model'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

export interface BuscarCarrosQueryRequest {
    usuarioId: string
}

export class BuscarCarrosQuery {
    private logger = new Logger('BuscarCarrosQuery')

    constructor(
        @InjectRepository(CarroModel)
        private readonly carroModel: Repository<CarroModel>,
    ) {}
    async execute(request: BuscarCarrosQueryRequest): Promise<CarroModel[]> {
        try {
            if (!request.usuarioId) {
                const buscarCarros = await this.carroModel.find({
                    relations: {
                        usuario: true,
                        manutencoes: { solucao: true },
                    },
                })
                this.logger.debug(
                    `BuscarCarrosQuery executado com sucesso com parametros:${JSON.stringify(
                        request,
                        null,
                        0,
                    )}`,
                )
                return buscarCarros
            }
            const buscarCarros = await this.carroModel.find({
                where: {
                    usuario: {
                        id: request.usuarioId,
                    },
                },
                relations: {
                    usuario: true,
                    manutencoes: {
                        solucao: true,
                    },
                },
            })
            this.logger.debug(
                `BuscarCarrosQuery executado com sucesso com parametros:${JSON.stringify(
                    request,
                    null,
                    0,
                )}`,
            )
            return buscarCarros
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
