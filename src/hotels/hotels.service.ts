import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Hotel from './hotel.entity'
import {Repository} from 'typeorm'

@Injectable()
export default class HotelsService {
    constructor(
    @InjectRepository(Hotel)
    private hotelsRepository: Repository<Hotel>){}
}
