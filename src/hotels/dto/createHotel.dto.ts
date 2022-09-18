import {IsString, IsNumber, IsNotEmpty, IsOptional} from 'class-validator'

export default class UpdateHotelDto{
    hotelName: string;
    description: string;
    hotelType: string;   
}