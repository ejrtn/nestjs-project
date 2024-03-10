import { Controller, Get, Render, Post, Body, Param,Req,Res, Redirect, Query } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';
import { EmailDto } from '../dto/email.dto';
import { PhonDto } from '../dto/phon.dto';
import { User } from 'src/entity/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("/joinInsert")
    async joinInsert(@Body() userDto:UserDto): Promise<string>{
        this.userService.userInsert(userDto)
        return 'joinInsert'
        
    }

    @Post("/idCheck")
    async idCheck(@Body() body:any): Promise<string>{
        return await this.userService.idCheck(body.id).then(user=>{
            return user == null ? '' : user.id
        })
    }

    @Post("/emailStats")
    async emailStats(@Body() emailDto:EmailDto){
        return emailDto.email
    }

    @Post("/phonStats")
    async phonStats(@Body() phonDto:PhonDto){
        return phonDto.phon
    }

    @Get("/join")
    @Render("join")
    getJoin() {}

    @Get("/idPwSearch")
    @Render("idPwSearch")
    getㅑdPwSearch() {}

    @Post("/loginCheck")
    async getLoginCheck(@Body() data:any) {
        return await this.userService.loginCheck(data).then((user: { id: any; })=>{
            return user == null ? '': user.id
        })
    }

    
}
