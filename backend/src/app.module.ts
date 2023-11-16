import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { CoreModule } from './modules/core/core.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataBaseConnection } from 'typeorm.config'

@Module({
    imports: [
        CoreModule,
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot(DataBaseConnection),
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
