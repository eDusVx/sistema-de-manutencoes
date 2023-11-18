import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UsuariosModel } from 'src/modules/core/infra/models/Usuario.model'
import { Usuario } from '../../domain/Usuario'
import { UsuarioMapper } from '../mappers/Usuario.mapper'
import {
    UsuarioService,
    UsuarioServiceRequest,
} from '../../domain/services/Usuario.service'

@Injectable()
export class UsuarioServiceImpl implements UsuarioService {
    private logger = new Logger('UsuarioService')
    constructor(
        @InjectRepository(UsuariosModel)
        private usuarioRepository: Repository<UsuariosModel>,
        private readonly usuarioMapper: UsuarioMapper,
    ) {}

    async buscarUsuario(request: UsuarioServiceRequest): Promise<Usuario> {
        try {
            const usuarioModel = await this.usuarioRepository.findOne({
                where: {
                    email: request.email,
                    senha: request.senha,
                },
            })
            if (!usuarioModel) throw new Error('O usuário não existe')

            const usuario = await this.usuarioMapper.modelToDomain(usuarioModel)
            return usuario
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
