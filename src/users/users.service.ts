import { InjectRepository } from '@nestjs/typeorm';
import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common'
import User from './user.entity'
import { Repository} from 'typeorm';
import CreateUserDto from './dto/createUser.dto';
import  * as bcrypt from 'bcrypt'
import UpdateUserDto from './dto/updateUser.dto'
import { UserRole } from './user.entity';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}
    
    async getUserByEmail(email: string){
        console.log('addd')
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

        if(newUser){
            return newUser
        }
    }

    async updateUser(id, updateUserData:UpdateUserDto): Promise<any>{
        try{
           return await this.usersRepository.update(id, updateUserData)
        }catch(error){
            throw new HttpException("Cant not update", HttpStatus.CONFLICT)
        }
    }

    async deleteUser(role, id){
        if(role == UserRole.ADMIN){
           return await this.usersRepository.delete({id})
        }
        throw new HttpException("permission denied", HttpStatus.FORBIDDEN)
    }
}
