import { MailerService } from '@nestjs-modules/mailer';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }

    sendCode(name:string,to:string): string {
        this.mailerService
            .sendMail({
                to: to,
                from: 'dlstn153@naver.com',
                subject: 'mail code ✔',
                template: 'emailLayout.hbs',
                context: {  // Data to be sent to template files.
                    name: name,
                    code: this.createCode()
                }
            })
            .then((result) => {
                // console.log(result);
            })
            .catch((error) => {
                new ConflictException(error);
                console.log(error)
            });
        return this.createCode();
    }

    createCode(): string{
        const chrs = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',
        'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',
        1,2,3,4,5,6,7,8,9,0]

        let r = ''

        for(let i=0;i<10;i++){
            r += chrs[parseInt(Math.random() * chrs.length+"")];
        }

        return r
    }
}