import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export const loginHandler = (req: Request, res:Response)=>{

    const token = jwt.sign({
        test: "test"
    }, 'secret',{
        expiresIn: 60 * 60 * 24
    })

    return res.json({
      token
    })
}


// https://youtu.be/KQbgKizEjxw?t=1014
