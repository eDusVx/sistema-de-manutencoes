import { Repository } from 'typeorm';
import { UsuariosModel } from '../models/Usuario.model';
import { Usuario } from '../../domain/Usuario';
import { UsuarioRepository } from '../../domain/repositories/Usuario.repository';
import { UsuarioMapper } from '../mappers/Usuario.mapper';
export declare class UsuarioRepositoryImpl implements UsuarioRepository {
    private readonly usuarioModel;
    private readonly usuarioMapper;
    private logger;
    constructor(usuarioModel: Repository<UsuariosModel>, usuarioMapper: UsuarioMapper);
    saveUsuario(usuario: Usuario): Promise<string>;
    searchUsuario(id: string): Promise<Usuario>;
}
