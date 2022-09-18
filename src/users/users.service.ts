import { InjectRepository } from '@nestjs/typeorm';
import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common'
import User from './user.entity'
import { Repository, In} from 'typeorm';
import CreateUserDto from './dto/createUser.dto';
import  * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}
    
    // define function service
    async getUserByEmail(email: string){
        const user = await this.usersRepository.findOneBy({email});
        if (user){
            return user;
        }
        throw new HttpException("user with this email does not exist", HttpStatus.NOT_FOUND)
    }

    async getById(id: number){
        const user = await this.usersRepository.findOneBy({id});
        if(user){
            return user;
        }
        throw new HttpException("user with this id does not exist", HttpStatus.NOT_FOUND)
    }

    async create(userData: CreateUserDto){
        const password = userData.password;
        console.log(password)
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = this.usersRepository.create({
            ...userData,
            password: hashPassword
        })

        await this.usersRepository.save(newUser);
        return newUser;
    }

    async updateUser(){
        
    }

}
