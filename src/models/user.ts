// @ts-ignore
import mongoose, {Model} from "mongoose";

import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

export interface IUser extends Document {
    email: string;
    name: string;
    login: string;
    password: string;
}

export const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    login: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

export const User = mongoose.model('User', UserSchema);

export const getUserByLogin = function (login: string) {
    const query = {login: login};
    return User.findOne(query).exec();
}


export const getUserById = function (id: any, callback: any) {
    User.findById(id, callback);
}

export const addUser = async function (name:string, email:string, login:string, password:string) {
    let newUser = new User({name,email,login,password});
    const salt = await bcrypt.genSalt(10);``
    const hash = await bcrypt.hash(newUser.password, salt)
    newUser.password = hash;
    return await newUser.save();
}

export const comparePass = function (passFromForm: any, passFromDb: any) :Promise<boolean>{
    if (!passFromForm || !passFromDb) {
        return Promise.resolve(false);
    }

    return bcrypt.compare(passFromForm, passFromDb)
}