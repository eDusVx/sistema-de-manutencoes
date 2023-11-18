import { Usuario } from '../Usuario'

export interface UsuarioServiceRequest {
    email: string
    senha: string
}
export interface UsuarioService {
    buscarUsuario(request: UsuarioServiceRequest): Promise<Usuario>
}
