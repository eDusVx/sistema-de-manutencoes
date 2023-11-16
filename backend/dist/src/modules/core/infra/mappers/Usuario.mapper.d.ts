import { Repository } from 'typeorm';
import { UsuariosModel } from '../models/Usuario.model';
import { Usuario } from '../../domain/Usuario';
export declare class UsuarioMapper {
    private readonly usuarioModel;
    private logger;
    constructor(usuarioModel: Repository<UsuariosModel>);
    modelToDomain(usuarioModel: UsuariosModel): Usuario;
    domainToModel(usuario: Usuario): Promise<UsuariosModel>;
}
