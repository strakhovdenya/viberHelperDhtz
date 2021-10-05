import {Request, Response} from "express";
import {post, get, del,controller, use, bodyValidator} from "./decorators";

import jwt from 'jsonwebtoken';
// @ts-ignore
import {} from 'dotenv/config'
import passport from "passport";
import {ScheduleElder} from "../models/schedule-elder";
import {IScheduleElement} from "../config/interfaces/scheduleElement";


@controller('/api/schedule')
class ScheduleJuniorController {

    @post('/elder')
    @use(passport.authenticate('jwt', {session: false}))
    // @bodyValidator('login', 'password')
    async postLogin(req: Request, res: Response): Promise<void> {

        let ops: any[] = [];
        let items: IScheduleElement[] = req.body;
        items.forEach((item: IScheduleElement) => {
            ops.push(
                {
                    replaceOne: {
                        filter: {data: item.data},
                        replacement: item,
                        upsert: true
                    }
                }
            )
        })

        try {
            const result = await ScheduleElder.bulkWrite(ops, {ordered: false})
            if (result.result.ok === 1) {
                res.json({success: true, msg: "Сохранено расписание младших"});
                return;
            }
        } catch (e: any) {
            console.log(e);
            res.json({success: false, msg: e});
            return;
        }
    };

    @get('/elder/months')
    @use(passport.authenticate('jwt', {session: false}))
    async getMonths(req: Request, res: Response): Promise<void> {

        try {
            const result: [] = await ScheduleElder.distinct('year_month');
            res.json({data: result});
        } catch (e) {
            console.log(e);
            res.json({data: e});
            return;
        }
    }

    @get('/elder/:yearMonth')
    @use(passport.authenticate('jwt', {session: false}))
    async getOneMonth(req: Request, res: Response): Promise<void> {
        const {yearMonth} = req.params;

        try {
            const result: IScheduleElement | [] = await ScheduleElder.find({year_month: yearMonth});
            res.json({data: result});
        } catch (e) {
            console.log(e);
            res.json({data: e});
            return;
        }
    }

    @del('/elder/months/:yearMonth')
    @use(passport.authenticate('jwt', {session: false}))
    async deleteMonth(req: Request, res: Response): Promise<void> {
        const {yearMonth} = req.params;
        try {
            const result = await ScheduleElder.deleteMany({year_month: yearMonth});
            if (result.ok === 1) {
                res.json({success: true, msg: `Данные за ${yearMonth} удалены`});
                return;
            }else{
                res.json({success: false, msg: `Данные за ${yearMonth} не удалены`});
                return;
            }
        } catch (e) {
            console.log(e);
            res.json({success: false, msg: `Ошибка!!! Данные за ${yearMonth} не удалены`});
            return;
        }
    }
}