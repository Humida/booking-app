import { Controller, Get, Post, Body, HttpStatus, HttpException, Patch, Param } from '@nestjs/common';
import { get } from 'http';
import UpdateUserDto from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get("/:email")
    async getUserByEmail(email){
        return this.usersService.getUserByEmail(email);
    }

    @Patch("/update/:id")
    async updateUser(@Param() id: string, @Body() updateUserData: UpdateUserDto){
        return this.usersService.updateUser(id, updateUserData)
    }

}
