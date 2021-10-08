import {Request, Response} from "express";
import {post, get, del, controller, use, bodyValidator} from "./decorators";

import jwt from 'jsonwebtoken';
// @ts-ignore
import {} from 'dotenv/config'
import passport from "passport";
import {MenuModel} from "../models/menu";
import {IMenu} from "../config/interfaces/IMenu";


@controller('/api')
class MenuController {


    @post('/menus')
    @use(passport.authenticate('jwt', {session: false}))
    async updateMenu(req: Request, res: Response): Promise<void> {
        let ops: any[] = [];
        let item: IMenu = req.body;

        // res.json({success: false, msg: 'test fail save!!!!!!!!!!!!'});
        // return;

        ops.push(
            {
                replaceOne: {
                    filter: {level: item.level},
                    replacement: item,
                    upsert: true
                }
            }
        );


        try {
            const result = await MenuModel.bulkWrite(ops, {ordered: false})
            if (result.result.ok === 1) {
                res.json({success: true, msg: `Сохранено меню: ${item.level}`});
                return;
            }
        } catch (e: any) {
            console.log(e);
            res.json({success: false, msg: e});
            return;
        }
    }


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