import { Usuario } from '../Usuario'

export interface UsuarioService {
    buscarUsuario(email: string, senha: string): Promise<Usuario>
}
