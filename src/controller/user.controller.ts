import { Controller, Get, Render, Post, Body, Param,Req,Res, Redirect } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("/joinInsert")
    // @Redirect("/")
    async joinInsert(@Body() userDto:UserDto): Promise<string>{
        console.log(userDto)
        return 'joinInsert'
        // this.userService.userInsert(userDto)
    }

    @Get("/join")
    @Render("join")
    getJoin() {}

    @Get("/idPwSearch")
    @Render("idPwSearch")
    getIdPwSearch() {}
}
