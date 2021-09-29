"use strict";
// // @ts-ignore
// import express from 'express'
//
// const accountRouter = express.Router();
// import {User, getUserByLogin, addUser, comparePass} from "../models/user";
// // @ts-ignore
// import passport from 'passport';
// // @ts-ignore
// import jwt from 'jsonwebtoken';
//
// // @ts-ignore
// import {} from 'dotenv/config'
//
//
//
// // router.get('/reg', (req, res) => {
// //     res.send('registration page');
// // });
//
// accountRouter.post('/reg', (req: { body: { name: any; email: any; login: any; password: any; }; }, res: { json: (arg0: { success: boolean; msg: string; }) => void; }) => {
//     let newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         login: req.body.login,
//         password: req.body.password,
//     });
//
//     addUser(newUser, (err: any, user: any) => {
//         if (err) {
//             res.json({success: false, msg: "User not saved"})
//         } else {
//             res.json({success: true, msg: "User saved"})
//         }
//     })
// });
//
//
// accountRouter.post('/auth', (req: { body: { login: any; password: any; }; }, res: { json: (arg0: { success: boolean; msg?: string; token?: any; user?: { id: any; name: any; login: any; email: any; }; }) => void; }) => {
//
//     const login = req.body.login;
//     const password = req.body.password;
//
//     getUserByLogin(login, (err: any, user: { password: any; toJSON: () => any; _id: any; name: any; login: any; email: any; }) => {
//
//         if (err) {
//             throw err;
//         }
//         if (!user) {
//             return res.json({success: false, msg: "User not found"})
//         }
//
//         comparePass(password, user.password, (err: any, isMatch: any) => {
//             if (err) {
//                 throw err;
//             }
//             if (isMatch) {
//                 const toket = jwt.sign(user.toJSON(), process.env.SECRET, {
//                     expiresIn: 3600 * 24
//                 })
//
//                 res.json({
//                     success: true,
//                     token: toket,
//                     user: {
//                         id: user._id,
//                         name: user.name,
//                         login: user.login,
//                         email: user.email,
//                     }
//                 })
//             } else {
//                 return res.json({success: false, msg: "Wrong password"})
//             }
//         })
//     })
// });
//
//
// accountRouter.get('/dashboard', passport.authenticate('jwt', {session: false}), (req: any, res: { send: (arg0: string) => void; }) => {
//     res.send('dashboard page');
// });
//
// export default accountRouter;
