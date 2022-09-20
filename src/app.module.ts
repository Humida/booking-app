import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config"
import * as Joi from "@hapi/joi"

import { AuthenticationModule } from './authentication/authentication.module';
import { BookingModule } from './booking/booking.module';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';
import { SearchModule } from './search/search.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
            ConfigModule.forRoot({
              validationSchema: Joi.object({
                POSTGRES_HOST: Joi.string().required(),
                POSTGRES_POST: Joi.number().required(),
                POSTGRES_USER: Joi.string().required(),
                POSTGRES_PASSWORD:Joi.string().required(),
                PORT: Joi.number(),
              })
            }),
            AuthenticationModule,
            BookingModule,
            HotelsModule,
            RoomsModule,
            SearchModule,
            UsersModule,
            DatabaseModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
