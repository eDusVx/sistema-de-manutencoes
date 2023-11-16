import { Usuario } from '../Usuario';
export interface UsuarioRepository {
    saveUsuario(usuario: Usuario): Promise<string>;
    searchUsuario(id: string): Promise<Usuario>;
}
