import jwt from 'jsonwebtoken'

import config from 'config'

import {User} from '../modules/user/user.model'

import { OauthAccessToken } from "../modules/oauthAccessToken/oauthAccessToken.model";

import dotenv from 'dotenv'

dotenv.config();


export const Authenticate = async(req, res, next) => {
    try {
        console.log(req.headers);
        
        const tokens = req.headers.authorization.split(" ")

        const tokenType = tokens[0]

        if (tokenType !== 'Bearer') {
            return res.status(401).json({
                status: false,
                message: 'user unauthorized'
            })
        }

        const token = tokens[1]

        console.log("token");
        console.log(token);
        console.log(process.env.SECRET_KEY);
        
        
        
        

        const decoded = jwt.verify(token,  config.get('jwtSecretKey'))
        console.log(decoded);

        let tokenData = await OauthAccessToken.findOne({id: decoded.id , revoked: 0});

        console.log(tokenData);
        

        if (! tokenData) {
            return res.status(401).json({
                status: false,
                message: 'user unauthorized'
            });
        }

        let user = await User.findOne({_id: tokenData.user_id});

        console.log(user);

        if (! user) {
            return res.status(401).json({
                status: false,
                message: 'user unauthorized00'
            })
        }

        let authUser = {
            name: user.name ,
            email: user.email ,
            mobile: user.mobile
        }

        req.userData = authUser

        return next()
    } catch(error) {
        console.log("step 5");
        console.log(error);
        
        return res.status(401).json({
            status: false,
            message: 'user unauthorized1',
            error
        })
    }
}