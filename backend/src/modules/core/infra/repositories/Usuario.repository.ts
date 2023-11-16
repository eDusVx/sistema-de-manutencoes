import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UsuariosModel } from '../models/Usuario.model'
import { Usuario } from '../../domain/Usuario'
import { UsuarioRepository } from '../../domain/repositories/Usuario.repository'
import { UsuarioMapper } from '../mappers/Usuario.mapper'

@Injectable()
export class UsuarioRepositoryImpl implements UsuarioRepository {
    private logger = new Logger('UsuarioRepository')
    constructor(
        @InjectRepository(UsuariosModel)
        private readonly usuarioModel: Repository<UsuariosModel>,
        private readonly usuarioMapper: UsuarioMapper,
    ) {}
    async saveUsuario(usuario: Usuario): Promise<string> {
        try {
            const usuarioModelResult = await this.usuarioMapper.domainToModel(
                usuario,
            )
            await this.usuarioModel.save(usuarioModelResult)
            return 'Usuário cadastrado com sucesso!'
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
    async searchUsuario(id: string): Promise<Usuario> {
        try {
            const usuarioeModel = await this.usuarioModel.findOne({
                where: { id: id },
            })

            const usuarioDomain =
                this.usuarioMapper.modelToDomain(usuarioeModel)

            return usuarioDomain
        } catch (e) {
            this.logger.error(e)
            throw e
        }
    }
}
