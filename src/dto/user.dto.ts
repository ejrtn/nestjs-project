import { IsInt, IsString, IsNotEmpty, IsEmail, IsMobilePhone } from 'class-validator';
import { EmailDto } from './email.dto'
import { PhonDto } from './phon.dto'


export class UserDto implements EmailDto, PhonDto{

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    pw: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    birthday: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsMobilePhone()
    phon: string;
}
