import {Controller,
        Post,
        Delete,
        Put,
        Patch,
        Get,
        Param,
        Query,
        Req} from '@nestjs/common';

import {ApiParam, ApiResponse, ApiTags} from '@nestjs/swagger'
import HotelsService from './hotels.service';

@ApiTags("hotels")
@Controller('hotels')
export default class HotelsController {
    constructor(private hotelService: HotelsService){

    }
}
