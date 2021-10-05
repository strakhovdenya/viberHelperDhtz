import {Request, Response} from "express";
import {post, get, del,controller, use, bodyValidator} from "./decorators";

import jwt from 'jsonwebtoken';
// @ts-ignore
import {} from 'dotenv/config'
import passport from "passport";
import {MenuModel} from "../models/menu";


@controller('/api')
class MenuController {



    @get('/menus')
    @use(passport.authenticate('jwt', {session: false}))
    async getMonths(req: Request, res: Response): Promise<void> {
        try {
            const result: [] = await MenuModel.find();
            res.json(result);
        } catch (e) {
            console.log(e);
            res.json({data: e});
            return;
        }
    }


}