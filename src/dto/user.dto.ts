import { IsInt, IsString, IsNotEmpty, IsEmail, IsMobilePhone } from 'class-validator';


export class UserDto{

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
}
