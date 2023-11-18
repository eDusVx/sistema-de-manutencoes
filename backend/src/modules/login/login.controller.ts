import { Controller, Post, Body, Logger, Inject } from '@nestjs/common'
import {
    AutenticacaoService,
    AutenticacaoServiceRequest,
    AutenticacaoServiceResponse,
} from './domain/services/Autenticacao.service'

@Controller('login')
export class LoginController {
    private logger = new Logger('LoginController')
    constructor(
        @Inject('AutenticacaoService')
        private readonly autenticacaoService: AutenticacaoService,
    ) {}

    @Post('/auth')
    async login(
        @Body() request: AutenticacaoServiceRequest,
    ): Promise<AutenticacaoServiceResponse> {
        try {
            const response = await this.autenticacaoService.login(request)
            return response
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
