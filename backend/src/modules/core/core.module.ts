import { Module } from '@nestjs/common'
import { CoreController } from './core.controller'
import { mappers } from './infra/mappers'
import { usecases } from './aplication/usecases'
import { UsuarioRepositoryImpl } from './infra/repositories/Usuario.repository'
import { UsuariosModel } from './infra/models/Usuario.model'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CarrosModel } from './infra/models/Carros.model'
import { ManutencoesModel } from './infra/models/Manutencoes.model'
import { SolucoesModel } from './infra/models/Solucoes.model'
import { CarroRepositoryImpl } from './infra/repositories/Carro.repository'
import { queries } from './aplication/queries'

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UsuariosModel,
            CarrosModel,
            ManutencoesModel,
            SolucoesModel,
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
