import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { CoreModule } from './modules/core/core.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataBaseConnection } from 'typeorm.config'
import { LoginModule } from './modules/login/login.module'

@Module({
    imports: [
        CoreModule,
        LoginModule,
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot(DataBaseConnection),
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
