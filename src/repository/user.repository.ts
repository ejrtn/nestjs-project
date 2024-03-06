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
        return this.#userRepository
        .createQueryBuilder()
        .insert()
        .into(UserDto)
        .values({
            id: user.id,
            pw: user.pw,
            name: user.name, 
            gender: user.gender, 
            birthday: user.birthday, 
            email: user.email,
            phon: user.phon,
        })
        .execute();
    }
}