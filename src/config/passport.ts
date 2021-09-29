// @ts-ignore
import {} from 'dotenv/config'
import {User} from "../models/user";

// @ts-ignore
import {Strategy as JwtStrategy} from 'passport-jwt';
// @ts-ignore
import {ExtractJwt} from 'passport-jwt';

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}

const strategy = new JwtStrategy(opts, function (jwt_payload: string, done: (arg0: null, arg1: boolean) => any) {
    User.findOne({id: jwt_payload.sub}, function (err: null, user: boolean) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
})

export default function (passport: { use: (arg0: string, arg1: any) => void; }) {
    passport.use('jwt', strategy);
}

