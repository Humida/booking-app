import {IsString, IsNumber, IsNotEmpty, IsOptional} from 'class-validator'

export default class UpdateHotelDto{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    hotelName: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    hotelType: string; 
}