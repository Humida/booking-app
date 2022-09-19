import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import {Inject, Injectable} from "@nestjs/common"
import { AuthenticationService } from "./authentication.service";
import User from "../users/user.entity"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authenticationService: AuthenticationService){
        super({usernameField: 'email', passwordField: "password"});
    }    
    async validate(email: string, password: string): Promise<any>{
        return this.authenticationService.getAuthenticateUser(email, password);
    }
}