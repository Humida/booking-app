import {IsEmail, IsString, IsNotEmpty} from 'class-validator'

export default class LoginUserDto{
    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;
}