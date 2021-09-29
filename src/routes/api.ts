import express, {Request, Response} from 'express'
const scheduleRoute = express.Router();
import {ScheduleJunior} from "../models/schedule-yanger";
import {ScheduleElder} from "../models/schedule-elder";
import passport from 'passport';

scheduleRoute.post('/schedule/junior1',passport.authenticate('jwt', {session: false}),(req:Request, res:Response) => {

});

scheduleRoute.post('/schedule/elder',passport.authenticate('jwt', {session: false}),(req:Request, res:Response) => {
    let ops: any[] = [];
    let items = req.body;
    items.forEach((item: { data: any; }) => {
        ops.push(
            {
                replaceOne : {
                    filter: {data: item.data},
                    replacement : item,
                    upsert: true
                }
            }
        )
    })
    ScheduleElder.bulkWrite(ops, {ordered: false})
        .then(function () {
            return res.json({success: true, msg: "Сохранено расписание старших"})
        }).catch(function (error: any) {
        console.log(error);
        return res.json({success: false, msg: error})
    });
});

scheduleRoute.get('/schedule/junior/months1', passport.authenticate('jwt', {session: false}),(req:Request, res:Response) => {
    ScheduleJunior.distinct('year_month')
        .then(function (dataInBase: any) {
            return res.json({data: dataInBase})
        })
        .catch(function (error: any) {
            console.log(error);
            return res.json({data: error})
        });
});

scheduleRoute.get('/schedule/junior1/:yearMonth', passport.authenticate('jwt', {session: false}),(req:Request, res:Response) => {
    console.log('yearMonth111');
    const {yearMonth} = req.params;
    ScheduleJunior.find({year_month: yearMonth})
        .then(function (dataInBase: any) {
            return res.json({data: dataInBase})
        })
        .catch(function (error: any) {
            console.log(error);
            return res.json({data: error})
        });
});


scheduleRoute.get('/schedule/elder/:yearMonth', passport.authenticate('jwt', {session: false}),(req:Request, res:Response) => {
    const {yearMonth} = req.params;
    ScheduleElder.find({year_month: yearMonth})
        .then(function (dataInBase: any) {
            return res.json({data: dataInBase})
        })
        .catch(function (error: any) {
            console.log(error);
            return res.json({data: error})
        });
});


export default scheduleRoute;
