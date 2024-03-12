import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, } from '@nestjs/config';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'


@Module({
    imports:[
        ConfigModule.forRoot({
            envFilePath: ['.config.env'],
            isGlobal: true,
        }),
        MailerModule.forRootAsync({
            useFactory: () => ({
                transport:{
                    host:process.env.EMAIL_HOST,
                    port:process.env.EMAIL_PORT,
                    secure:false,
                    auth:{
                        user:process.env.EMAIL_USER,
                        pass:process.env.EMAIL_PASS
                    }
                },
                template:{
                    dir: join('views'),
                    adapter: new HandlebarsAdapter(),
                    options:{
                        strict:true,
                    }
                }
            }),
        })
    ]
})
export class MailModule {}
