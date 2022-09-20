import {IsString, IsNumber, IsNotEmpty, IsOptional} from 'class-validator'

import { HotelType } from '../hotel.entity';
export default class CreateHotelDto{
    hotelName: string;
    description: string;
    hotelType: HotelType;
    address: object;
    images: string[];
}