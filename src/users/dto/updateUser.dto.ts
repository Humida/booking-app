import { UserRole } from "../user.entity";
import {IsOptional, IsString} from 'class-validator'

export default class UpdateUserDto{
    @IsOptional()
    fullName: string;

    @IsOptional()
    phoneNumber: string;

    @IsOptional()
    isActive: boolean;

    @IsOptional()
    userRole: UserRole;
}