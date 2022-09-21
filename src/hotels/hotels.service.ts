import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Hotel from './hotel.entity'
import {Repository} from 'typeorm';
import getRepository from 'typeorm'
import CreateHotelDto from './dto/createHotel.dto'
import UpdateHotelDto from './dto/createHotel.dto';

import slug from 'slug'
import PaginationHotelDto from 'src/users/dto/paginationHotel.dto';
@Injectable()
export default class HotelsService {
    constructor(
    @InjectRepository(Hotel)
    private hotelsRepository: Repository<Hotel>){}

    private async createHotel(hotelData: CreateHotelDto){
        try{
            const nameSlug = this.slugify(hotelData.hotelName);
            const newHotel = await this.hotelsRepository.create({...hotelData, slug: nameSlug})
            await this.hotelsRepository.save(newHotel)

        }catch(error){
            throw new HttpException("Something is error", HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

    public async getHotelBySlug(slug: string){
        const hotel = await this.hotelsRepository.findOneBy({slug: slug})
        if(hotel){
            return hotel
        }
        throw new HttpException("Can't find hotel with this slug", HttpStatus.NOT_FOUND)
    }

    private async updateHotel(slug: string, hotelDataUpdate: UpdateHotelDto){
        const hotelOldData = await this.hotelsRepository.findOneBy({slug: slug});
        const update = Object.assign(hotelOldData, hotelDataUpdate)
        const hotel = await this.hotelsRepository.save(update);
        return {hotel}
    }

    private async deleteHotel(slug: string){
        return await this.hotelsRepository.delete({slug: slug});
    }


    public async getAllHotel(pagination: PaginationHotelDto): Promise<Hotel[]>{
        const [hotels, count] = await this.hotelsRepository
                                    .findAndCount({
                                        take: pagination.take,
                                        skip: pagination.skip
                                    })
        
        if (count){
            throw new HttpException("Not found the hotets with query", HttpStatus.NOT_FOUND)
        }
        
        return hotels
    }

    private slugify(hotelName: string){
        return slug(hotelName, {lower: true}).toString()
    }
}
