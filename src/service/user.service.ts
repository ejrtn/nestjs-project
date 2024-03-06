import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository'
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository:UserRepository){
    }

    userInsert(userDto:UserDto){
        this.userRepository.insert(userDto)
    }
}
