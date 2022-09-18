import { Controller, Get, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { get } from 'http';
import { UsersService } from './users.service';



@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}


    @Get("/:email")
    async getUserByEmail(email){
        return this.usersService.getUserByEmail(email);
    }

}
