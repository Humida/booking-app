import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import HotelsController from './hotels.controller';
import HotelsService from './hotels.service';
import Hotel from './hotel.entity'
import Address from './address.entity';

@Module({
  imports :[TypeOrmModule.forFeature([Hotel, Address])], 
  controllers: [HotelsController],
  providers: [HotelsService]
})
export class HotelsModule {}
