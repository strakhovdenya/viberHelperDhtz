import {Request, Response} from "express";
import {post, get, del, controller, use, bodyValidator} from "./decorators";
import jwt from 'jsonwebtoken';
// @ts-ignore
import {} from 'dotenv/config'
import passport from "passport";
import {ScheduleJunior} from "../models/schedule-yanger";
import {IScheduleElement} from "../config/interfaces/scheduleElement";


@controller('/api/schedule')
class ScheduleJuniorController {

    @post('/junior')
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
            const result = await ScheduleJunior.bulkWrite(ops, {ordered: false})
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

    @get('/junior/months')
    @use(passport.authenticate('jwt', {session: false}))
    async getMonths(req: Request, res: Response): Promise<void> {

        try {
            const result: [] = await ScheduleJunior.distinct('year_month');
            res.json({data: result});
        } catch (e) {
            console.log(e);
            res.json({data: e});
            return;
        }
    }

    @del('/junior/months/:yearMonth')
    @use(passport.authenticate('jwt', {session: false}))
    async deleteMonth(req: Request, res: Response): Promise<void> {
        const {yearMonth} = req.params;
        try {
            const result = await ScheduleJunior.deleteMany({year_month: yearMonth});
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

    @get('/junior/:yearMonth')
    @use(passport.authenticate('jwt', {session: false}))
    async getOneMonth(req: Request, res: Response): Promise<void> {
        const {yearMonth} = req.params;

        try {
            const result: IScheduleElement | [] = await ScheduleJunior.find({year_month: yearMonth});
            res.json({data: result});
        } catch (e) {
            console.log(e);
            res.json({data: e});
            return;
        }
    }
}