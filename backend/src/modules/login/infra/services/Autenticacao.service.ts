import { Injectable, Inject, Logger } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import {
    AutenticacaoService,
    AutenticacaoServiceRequest,
} from '../../domain/services/Autenticacao.service'
import {
    UsuarioService,
    UsuarioServiceRequest,
} from '../../domain/services/Usuario.service'

@Injectable()
export class AutenticacaoServiceImpl implements AutenticacaoService {
    private logger = new Logger('AutenticacaoService')
    constructor(
        private readonly jwtService: JwtService,
        @Inject('UsuarioService')
        private readonly usuarioService: UsuarioService,
    ) {}

    async login(request: AutenticacaoServiceRequest) {
        try {
            const serviceRequest: UsuarioServiceRequest = {
                email: request.email,
                senha: request.senha,
            }

            const usuario = await this.usuarioService.buscarUsuario(
                serviceRequest,
            )

            const payload = {
                email: usuario.getEmail(),
                senha: usuario.getSenha(),
            }
            this.logger.debug(`Email ${usuario.getEmail()} logado com sucesso!`)
            return {
                token: this.jwtService.sign(payload),
                id: usuario.getCpf(),
            }
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
