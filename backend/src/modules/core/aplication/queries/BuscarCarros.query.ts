import { Logger } from '@nestjs/common'
import { CarrosModel } from '../../infra/models/Carros.model'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

export interface BuscarCarrosQueryRequest {
    usuarioId: string
}

export class BuscarCarrosQuery {
    private logger = new Logger('BuscarCarrosQuery')

    constructor(
        @InjectRepository(CarrosModel)
        private readonly carroModel: Repository<CarrosModel>,
    ) {}
    async execute(request: BuscarCarrosQueryRequest): Promise<CarrosModel[]> {
        try {
            const buscarCarros = await this.carroModel.find({
                where: { usuario: { id: request.usuarioId } },
                relations: { usuario: true, manutencoes: { solucoes: true } },
            })

            this.logger.debug(buscarCarros)
            return buscarCarros
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
