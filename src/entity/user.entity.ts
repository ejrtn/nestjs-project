import {
    Entity,
    Column,
    PrimaryColumn,
    OneToMany,
} from 'typeorm'


@Entity({comment:'사용자'})
export class User{

    @PrimaryColumn({
        type:'varchar',
        comment: '유저 아이디'
    })
    id: string;
    
    @Column({
        type:'varchar',
        comment: '유저 비밀번호'
    })
    pw: string;

    @Column({
        type:'varchar',
        comment: '유저 이름'
    })
    name: string;

    @Column({
        type:'varchar',
        comment: '성별'
    })
    gender: string;

    @Column({
        type:'varchar',
        comment: '생년월일'
    })
    birthday: string;

    @Column({
        type:'varchar',
        comment: '이메일'
    })
    email: string;

    @Column({
        type:'varchar',
        comment: '핸드폰 번호'
    })
    phon: string;
}
