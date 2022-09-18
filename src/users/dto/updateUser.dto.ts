import { UserRole } from "../user.entity";
import {IsOptional, IsString} from 'class-validator'

export default class UpdateUserDto{
    @IsOptional()
    firstName: string;
    @IsOptional()
    lastName: string;

    @IsOptional()
    userName: string;

    @IsOptional()
    phoneNumber: string;

    @IsOptional()
    isActive: boolean;

    @IsOptional()
    userRole: UserRole;
}