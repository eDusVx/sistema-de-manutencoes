import { DeletarCarroUseCase } from './DeletarCarros.usecase'
import { RegistrarCarroUseCase } from './RegistrarCarros.usecase'
import { RegistrarManutencoesCarroUseCase } from './RegistrarManutencoesCarros.usecase'
import { RegistrarUsuarioUseCase } from './RegistrarUsuario.usecase'

export const usecases = [
    RegistrarUsuarioUseCase,
    RegistrarCarroUseCase,
    DeletarCarroUseCase,
    RegistrarManutencoesCarroUseCase,
]
