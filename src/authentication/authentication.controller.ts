import { Controller,Body, Req, HttpCode, UseGuards, Post} from '@nestjs/common';
import CreateUserDto from 'src/users/dto/createUser.dto';
import LoginUserDto from 'src/users/dto/loginUser.dto';
import { UsersService } from 'src/users/users.service';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authenticationService: AuthenticationService,
    ){
    }

    @Post("/register")
    async register(@Body() registrationData: CreateUserDto){
        return this.authenticationService.register(registrationData)
    }

    @HttpCode(200)
    @UseGuards()
    @Post("login")
    async loginWithEmail(@Body() loginData: LoginUserDto){
        return this.authenticationService.login(loginData.email, loginData.password)
    }
}
