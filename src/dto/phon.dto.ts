import { IsString, IsNotEmpty, IsMobilePhone } from 'class-validator';


export class PhonDto {

    @IsString()
    @IsNotEmpty()
    @IsMobilePhone()
    phon: string;
}
