import { RegistrarUsuarioUseCase, RegistrarUsuarioUseCaseRequest } from './aplication/usecases/RegistrarUsuario.usecase';
import { RegistrarCarroUseCase, RegistrarCarroUseCaseRequest } from './aplication/usecases/RegistrarCarros.usecase';
import { BuscarCarrosQuery, BuscarCarrosQueryRequest } from './aplication/queries/BuscarCarros.query';
import { DeletarCarroUseCase, DeletarCarroUseCaseRequest } from './aplication/usecases/DeletarCarros.usecase';
import { RegistrarManutencoesCarroUseCase, RegistrarManutencoesCarroUseCaseRequest } from './aplication/usecases/RegistrarManutencoesCarros.usecase';
export declare class CoreController {
    private readonly registrarUsuarioUseCase;
    private readonly registrarCarroUseCase;
    private readonly buscarCarrosQuery;
    private readonly deletarCarroUseCase;
    private readonly registrarManutencaoUseCase;
    private logger;
    constructor(registrarUsuarioUseCase: RegistrarUsuarioUseCase, registrarCarroUseCase: RegistrarCarroUseCase, buscarCarrosQuery: BuscarCarrosQuery, deletarCarroUseCase: DeletarCarroUseCase, registrarManutencaoUseCase: RegistrarManutencoesCarroUseCase);
    registrarUsuario(request: RegistrarUsuarioUseCaseRequest): Promise<any>;
    registrarCarro(request: RegistrarCarroUseCaseRequest): Promise<any>;
    BuscarCarros(request: BuscarCarrosQueryRequest): Promise<any>;
    deletarCarro(request: DeletarCarroUseCaseRequest): Promise<any>;
    registrarManutencao(request: RegistrarManutencoesCarroUseCaseRequest): Promise<any>;
}
