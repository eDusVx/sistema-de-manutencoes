import { Injectable, Inject, Logger } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import {
    AutenticacaoService,
    AutenticacaoServiceRequest,
} from '../../domain/services/Autenticacao.service'
import { UsuarioService } from '../../domain/services/Usuario.service'
import { Usuario } from '../../domain/Usuario'

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
            const usuario = await this.usuarioService.buscarUsuario(
                request.email,
                request.senha,
            )

            const payload = {
                email: usuario.getEmail(),
                senha: usuario.getSenha(),
            }

            return {
                token: this.jwtService.sign(payload),
            }
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
