import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserRepository {
    #userRepository: Repository<User>;

    constructor(private readonly dataSource: DataSource) {
        this.#userRepository = this.dataSource.getRepository(User);
    }

    insert(user: UserDto) {
        return this.#userRepository.insert(user)
    }

    idCheck(id:string): Promise<User> {
        return this.#userRepository.findOne({where:{id:id}})
    }

    loginCheck(data:any): Promise<User> {
        return this.#userRepository.findOne({where:{id:data.id,pw:data.pw}})
    }
}