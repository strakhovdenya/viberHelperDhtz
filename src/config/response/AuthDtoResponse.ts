import {UserSchema} from "../../models/user";

export default class AuthDtoResponse {
    public token?: string;
    public user?: typeof UserSchema;

    constructor(public success: boolean = true, public msg: string = '') {
    }

    static wrongPassword(){
        return new AuthDtoResponse(false, "Wrong password");
    }

    static userNotFound(){
        return new AuthDtoResponse(false, "User not found!!");
    }

    static userLogged(token:string, user:typeof UserSchema){
        const resp =  new AuthDtoResponse(true, "You are logged!");
        resp.token = token;
        resp.user = user;

        return resp;
    }
    static userNotRegistered(){
        return new AuthDtoResponse(false, "User not registered");
    }

    static userRegistered(){
        return new AuthDtoResponse(true, "User registered");
    }

}