import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    JwtModule.registerAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory: async (configService: ConfigService)=>({
      secret: configService.get("JWT_SECRET"),
      signOptions:{
        expiresIn: `${configService.get("JWT_EXPIRATION_TIME")}s`
      }
    })
  }), 
  ConfigModule, PassportModule, UsersModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, LocalStrategy]
})
export class AuthenticationModule {}
