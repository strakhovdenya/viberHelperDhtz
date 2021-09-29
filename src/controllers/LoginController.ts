import {Request, Response, NextFunction} from "express";
import {post, get, controller, use, bodyValidator} from "./decorators";
import {User, getUserByLogin, addUser, comparePass} from "../models/user";
import jwt from 'jsonwebtoken';
// @ts-ignore
import {} from 'dotenv/config'
import AuthDtoResponse from "../config/response/AuthDtoResponse";


@controller('/account')
class LoginController {

    @post('/auth')
    @bodyValidator('login', 'password')
    async postLogin(req: Request, res: Response): Promise<void> {

        const {login, password} = req.body;

        const user = await getUserByLogin(login)

        if (!user) {
            res.json(AuthDtoResponse.userNotFound());
            return;
        }
        const isMatch = await comparePass(password, user.password)

        if (!isMatch) {
            res.json(AuthDtoResponse.wrongPassword());
            return;
        }

        // @ts-ignore
        const token = jwt.sign(user.toJSON(), process.env.SECRET, {
            expiresIn: 3600 * 24
        })

        res.json(AuthDtoResponse.userLogged(token, user));
    };

    @post('/reg')
    @bodyValidator('name', 'email', 'login', 'password')
    async postRegister(req: Request, res: Response) {
        const {name, email, login, password} = req.body;

        const newUser = await addUser(name, email, login, password);

        if (!newUser) {
            res.json(AuthDtoResponse.userNotRegistered())
            return;
        }

        res.status(201).json(AuthDtoResponse.userRegistered())
    }

    @get('/dashboard')
    getDashboard(req: Request, res: Response) {
        res.send('dashboard page');
    }
}