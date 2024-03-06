import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, } from '@nestjs/config'
import {User} from '../entity/user.entity'
import { UserRepository } from '../repository/user.repository'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.config.env'],
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'mariadb',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE,
            entities: [
                User,
            ],
            synchronize: true,
            logging:true
        }),
    ],
    providers:[UserRepository]
})
export class DatabaseModule {}
