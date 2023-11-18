import { Module } from '@nestjs/common'
import { CoreController } from './core.controller'
import { mappers } from './infra/mappers'
import { usecases } from './aplication/usecases'
import { UsuarioRepositoryImpl } from './infra/repositories/Usuario.repository'
import { UsuariosModel } from './infra/models/Usuario.model'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CarroModel } from './infra/models/Carro.model'
import { ManutencaoModel } from './infra/models/Manutencao.model'
import { SolucaoModel } from './infra/models/Solucao.model'
import { CarroRepositoryImpl } from './infra/repositories/Carro.repository'
import { queries } from './aplication/queries'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UsuariosModel,
            CarroModel,
            ManutencaoModel,
            SolucaoModel,
        ]),
    ],
    controllers: [CoreController],
    providers: [
        ...mappers,
        ...usecases,
        ...queries,
        {
            provide: 'UsuarioRepository',
            useClass: UsuarioRepositoryImpl,
        },
        {
            provide: 'CarroRepository',
            useClass: CarroRepositoryImpl,
        },
    ],
})
export class CoreModule {}
