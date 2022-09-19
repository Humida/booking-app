import { Controller,Body, Request, Res, HttpCode, UseGuards, Post} from '@nestjs/common';
import CreateUserDto from 'src/users/dto/createUser.dto';
import LoginUserDto from 'src/users/dto/loginUser.dto';
import { AuthenticationService } from './authentication.service';
import {ApiResponse, getSchemaPath} from '@nestjs/swagger'
// import { UseGuards } from '@nestjs/passport';
import JwtAuthenticationGuard from './jwt-authentication.guard';
import LocalAUthenticaitonGuard from './localAuthentication.guard';
import RequestWithUser from './requestWithUser.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authenticationService: AuthenticationService,
    ){
    }
    @Post("/register")
    @HttpCode(201)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', schema:{$ref: getSchemaPath(CreateUserDto)}})
    @ApiResponse({status:500, description:"server error"})
    async register(@Body() registrationData: CreateUserDto){
        return this.authenticationService.register(registrationData)
    }

    @UseGuards(AuthGuard('local'))
    @Post("/login")
    async login(@Request() request: RequestWithUser){
        return request.user
    }
}
