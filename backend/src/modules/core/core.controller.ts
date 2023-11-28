import { Controller, Body, Post, Get, Query, Logger } from '@nestjs/common'
import {
    RegistrarUsuarioUseCase,
    RegistrarUsuarioUseCaseRequest,
} from './aplication/usecases/RegistrarUsuario.usecase'
import {
    RegistrarCarroUseCase,
    RegistrarCarroUseCaseRequest,
} from './aplication/usecases/RegistrarCarros.usecase'
import {
    BuscarCarrosQuery,
    BuscarCarrosQueryRequest,
} from './aplication/queries/BuscarCarros.query'
import {
    DeletarCarroUseCase,
    DeletarCarroUseCaseRequest,
} from './aplication/usecases/DeletarCarros.usecase'
import {
    RegistrarManutencaoCarroUseCase,
    RegistrarManutencaoCarroUseCaseRequest,
} from './aplication/usecases/RegistrarManutencoesCarros.usecase'
import { CarroModel } from './infra/models/Carro.model'

interface ErrorResponse {
    statusCode: number
    message: string
}

@Controller('core')
export class CoreController {
    private logger = new Logger('CoreController')
    constructor(
        private readonly registrarUsuarioUseCase: RegistrarUsuarioUseCase,
        private readonly registrarCarroUseCase: RegistrarCarroUseCase,
        private readonly buscarCarrosQuery: BuscarCarrosQuery,
        private readonly deletarCarroUseCase: DeletarCarroUseCase,
        private readonly registrarManutencaoUseCase: RegistrarManutencaoCarroUseCase,
    ) {}

    @Post('registrar-usuario')
    async registrarUsuario(
        @Body() request: RegistrarUsuarioUseCaseRequest,
    ): Promise<string | ErrorResponse> {
        try {
            const response = await this.registrarUsuarioUseCase.execute(request)
            return response
        } catch (e) {
            this.logger.error(e)
            const errorResponse: ErrorResponse = {
                statusCode: 500,
                message: e.message,
            }
            return errorResponse
        }
    }

    @Post('registrar-carro')
    async registrarCarro(
        @Body() request: RegistrarCarroUseCaseRequest,
    ): Promise<string | ErrorResponse> {
        try {
            const response = await this.registrarCarroUseCase.execute(request)
            return response
        } catch (e) {
            this.logger.error(e)
            const errorResponse: ErrorResponse = {
                statusCode: 500,
                message: e.message,
            }
            return errorResponse
        }
    }

    @Get('buscar-carro')
    async BuscarCarros(
        @Query() request: BuscarCarrosQueryRequest,
    ): Promise<CarroModel[] | ErrorResponse> {
        try {
            const response = await this.buscarCarrosQuery.execute(request)
            return response
        } catch (e) {
            this.logger.error(e)
            const errorResponse: ErrorResponse = {
                statusCode: 500,
                message: e.message,
            }
            return errorResponse
        }
    }

    @Post('deletar-carro')
    async deletarCarro(
        @Body() request: DeletarCarroUseCaseRequest,
    ): Promise<string | ErrorResponse> {
        try {
            const response = await this.deletarCarroUseCase.execute(request)
            return response
        } catch (e) {
            this.logger.error(e)
            return e.message
        }
    }

    @Post('registrar-manutencao')
    async registrarManutencao(
        @Body() request: RegistrarManutencaoCarroUseCaseRequest,
    ): Promise<string | ErrorResponse> {
        try {
            const response = await this.registrarManutencaoUseCase.execute(
                request,
            )

            return response
        } catch (e) {
            this.logger.error(e)
            const errorResponse: ErrorResponse = {
                statusCode: 500,
                message: e.message,
            }
            return errorResponse
        }
    }
}
