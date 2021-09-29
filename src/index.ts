import 'dotenv/config';
import express from 'express'
import {runMongo} from './config/mongo'
import passport from 'passport';
import configurePassport from './config/passport'
import path from 'path';
import {AppRouter} from "./routes/AppRouter";



const app = express();
const port = process.env.PORT || 8080;

configurePassport(passport);

app.set("etag", false);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

console.log(path.join(__dirname, '../public/index.html'));

import './controllers/LoginController';
import './controllers/ScheduleJuniorController';
import './controllers/ScheduleElderController';

// app.use('/account', accountRouter);
// app.use('/api', scheduleRoute);
app.use(AppRouter.getInstance());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
/*
!!!!!!!!
*/
const init = async () => {
    await runMongo();
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

init();
