import { Injectable } from '@nestjs/common';
import User from '../users/user.entity';
import { Repository } from 'typeorm';
import {HttpException, HttpStatus} from '@nestjs/common' 
import * as bcrypt from 'bcrypt'
import { UsersService } from 'src/users/users.service';
import CreateUserDto from 'src/users/dto/createUser.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import TokenPayload from './tokenPayload.interface';

@Injectable()
export class AuthenticationService {
    constructor(
        private userService: UsersService,
        private configService: ConfigService,
        private jwtService: JwtService
        ){
    }

    public async register(registrationData: CreateUserDto ){
        try{
            await this.userService.create({...registrationData})

        }catch(error){
            if(error?.code === 400){
                throw new HttpException("User with email is alrealy exists", HttpStatus.BAD_REQUEST)
            }
            console.log(error)
            throw new HttpException("Something is wrong", HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

    public async login(email: string, hashedPassword: string){
        const user = await this.userService.getUserByEmail(email)
        try{
            if (user){
                const password = user.password;
                await this.verifyPassword(hashedPassword, password)
                user.password = undefined;
                return user;
            } 
        }catch(error){
            throw new HttpException("Wrong credentials provided", HttpStatus.BAD_REQUEST)
        }  
    }

    private async verifyPassword(plainTextPassword: string, password: string){
        const isPasswordMatching = await bcrypt.compare(plainTextPassword, password);
        if(!isPasswordMatching){
            throw new HttpException("Wrong cendentials provided", HttpStatus.BAD_REQUEST)
        }
    }

    public async getAuthenticateUser(email: string, plainTextPassword: string){
        console.log('addd')

        try {
            const user = await this.userService.getUserByEmail(email);
            await this.verifyPassword(plainTextPassword, user.password)
            return user;
        }catch(error){
            throw new HttpException("Wrong cendentials provided", HttpStatus.BAD_REQUEST)
        }
    }

    public getCookieWithJwtToken(userId, number){
        const pyload: TokenPayload = {userId}
        const token = this.jwtService.sign(pyload)
        return {accessToken: token}
    }   
}
