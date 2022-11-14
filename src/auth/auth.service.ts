import { Injectable } from "@nestjs/common";
//import {User,Bookmark} from 'prisma';

@Injectable({})
export class AuthService{
    signin(){
        return {msg:"Hello, I am signin in"}
    }

    signup(){
        return { msg:"Hello, I have signed up"}
    }
}