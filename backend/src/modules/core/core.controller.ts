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
    RegistrarManutencoesCarroUseCase,
    RegistrarManutencoesCarroUseCaseRequest,
} from './aplication/usecases/RegistrarManutencoesCarros.usecase'

@Controller()
export class CoreController {
    private logger = new Logger('CoreController')
    constructor(
        private readonly registrarUsuarioUseCase: RegistrarUsuarioUseCase,
        private readonly registrarCarroUseCase: RegistrarCarroUseCase,
        private readonly buscarCarrosQuery: BuscarCarrosQuery,
        private readonly deletarCarroUseCase: DeletarCarroUseCase,
        private readonly registrarManutencaoUseCase: RegistrarManutencoesCarroUseCase,
    ) {}

    @Post('registrar-usuario')
    async registrarUsuario(@Body() request: RegistrarUsuarioUseCaseRequest) {
        try {
            const response = await this.registrarUsuarioUseCase.execute(request)
            return response
        } catch (e) {
            this.logger.error(e)
            return e.message
        }
    }

    @Post('registrar-carro')
    async registrarCarro(@Body() request: RegistrarCarroUseCaseRequest) {
        try {
            const response = await this.registrarCarroUseCase.execute(request)
            return response
        } catch (e) {
            this.logger.error(e)
            return e.message
        }
    }

    @Get('buscar-carro')
    async BuscarCarros(@Query() request: BuscarCarrosQueryRequest) {
        try {
            const response = await this.buscarCarrosQuery.execute(request)
            return response
        } catch (e) {
            this.logger.error(e)
            return e.message
        }
    }

    @Post('deletar-carro')
    async deletarCarro(@Body() request: DeletarCarroUseCaseRequest) {
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
        @Body() request: RegistrarManutencoesCarroUseCaseRequest,
    ) {
        try {
            const response = await this.registrarManutencaoUseCase.execute(
                request,
            )

            return response
        } catch (e) {
            this.logger.error(e)
            return e.message
        }
    }
}
