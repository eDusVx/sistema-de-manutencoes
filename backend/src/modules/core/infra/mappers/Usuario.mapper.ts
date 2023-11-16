import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UsuariosModel } from '../models/Usuario.model'
import { Usuario } from '../../domain/Usuario'

@Injectable()
export class UsuarioMapper {
    private logger = new Logger('UsuarioMapper')
    constructor(
        @InjectRepository(UsuariosModel)
        private readonly usuarioModel: Repository<UsuariosModel>,
    ) {}
    modelToDomain(usuarioModel: UsuariosModel) {
        const usuario = Usuario.create(
            {
                nome: usuarioModel.nome,
                email: usuarioModel.email,
                senha: usuarioModel.senha,
            },
            usuarioModel.id,
        )
        return usuario
    }

    async domainToModel(usuario: Usuario): Promise<UsuariosModel> {
        try {
            const usuarioModel = this.usuarioModel.create({
                id: usuario.getCPF(),
                nome: usuario.getNome(),
                email: usuario.getEmail(),
                senha: usuario.getSenha(),
            })
            await this.usuarioModel.save(usuarioModel)
            return usuarioModel
        } catch (error) {
            this.logger.error(error)
            throw error
        }
    }
}
