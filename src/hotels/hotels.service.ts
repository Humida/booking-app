import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Hotel from './hotel.entity'
import {Repository} from 'typeorm'
import CreateHotelDto from './dto/createHotel.dto'
import UpdateHotelDto from './dto/createHotel.dto';
@Injectable()
export default class HotelsService {
    constructor(
    @InjectRepository(Hotel)
    private hotelsRepository: Repository<Hotel>){}

    async createHotel(hotelData: CreateHotelDto){
        const newHotel = await this.hotelsRepository.create(hotelData)
    }

    async getHotelBySlug(slug: string){

    }
}
