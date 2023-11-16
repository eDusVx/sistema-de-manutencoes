import { Controller, Post, Body, Logger, Inject } from '@nestjs/common'
import {
    AutenticacaoService,
    AutenticacaoServiceRequest,
} from './domain/services/Autenticacao.service'

@Controller('login')
export class LoginController {
    private logger = new Logger('LoginController')
    constructor(
        @Inject('AutenticacaoService')
        private readonly autenticacaoService: AutenticacaoService,
    ) {}

    @Post('/auth')
    async login(@Body() request: AutenticacaoServiceRequest) {
        try {
            const response = await this.autenticacaoService.login(request)
            return response
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
