import { Injectable, Logger } from '@nestjs/common'
import { Usuario } from '../../domain/Usuario'
import { UsuariosModel } from 'src/modules/core/infra/models/Usuario.model'

@Injectable()
export class UsuarioMapper {
    private logger = new Logger('UsuarioMapper')
    async modelToDomain(usuarioModel: UsuariosModel) {
        try {
            const usuario = Usuario.create({
                email: usuarioModel.email,
                senha: usuarioModel.senha,
            })
            return usuario
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
