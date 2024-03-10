import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository'
import { UserDto } from '../dto/user.dto';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UserService {
    constructor(private readonly userRepository:UserRepository){
    }

    userInsert(userDto:UserDto){
        this.userRepository.insert(userDto);
    }

    idCheck(id:string): Promise<User>{
        return this.userRepository.idCheck(id);
    }

    loginCheck(data:any): Promise<User>{
        return this.userRepository.loginCheck(data);
    }
}
