import { Module } from '@nestjs/common'
import { LoginController } from './login.controller'
import { UsuarioServiceImpl } from './infra/services/Usuario.service'
import { mappers } from './infra/mappers'
import { AutenticacaoServiceImpl } from './infra/services/Autenticacao.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsuariosModel } from '../core/infra/models/Usuario.model'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

@Module({
    imports: [
        TypeOrmModule.forFeature([UsuariosModel]),
        PassportModule,
        JwtModule.register({
            privateKey:
                '64cff37dc338d2ff824d23d3ee5976242926dfb7377c0a784d34d7f0a86bc866',
            signOptions: { expiresIn: '60m' },
        }),
    ],
    controllers: [LoginController],
    providers: [
        ...mappers,
        {
            provide: 'UsuarioService',
            useClass: UsuarioServiceImpl,
        },
        {
            provide: 'AutenticacaoService',
            useClass: AutenticacaoServiceImpl,
        },
    ],
})
export class LoginModule {}
