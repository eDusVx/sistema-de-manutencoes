import { Usuario } from '../Usuario'

export interface AutenticacaoServiceResponse {
    token: string
}

export interface AutenticacaoServiceRequest {
    email: string
    senha: string
}

export interface AutenticacaoService {
    login(
        request: AutenticacaoServiceRequest,
    ): Promise<AutenticacaoServiceResponse>
}
