import { IsString, IsNotEmpty, IsEmail} from 'class-validator';


export class EmailDto {

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
