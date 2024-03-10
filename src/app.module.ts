import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user.module'
import { DatabaseModule } from './module/database.module'
import { MailModule } from './module/mail.module'

@Module({
    imports: [UserModule,DatabaseModule,MailModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
