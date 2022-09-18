import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import {Inject, Injectable} from "@nestjs/common"
import { AuthenticationService } from "./authentication.service";
import User from "../users/user.entity"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authenticationService: AuthenticationService){
        super({
            usernameFiend:"email"
        })
    }

    async validate(email: string, planTextPassword: string): Promise<User>{
        return this.authenticationService.getAuthenticateUser(email, planTextPassword);
    }
}