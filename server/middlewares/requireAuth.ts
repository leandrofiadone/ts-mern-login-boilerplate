import {Request, Response, NextFunction } from 'express';

import jwt from "jsonwebtoken"

export const requireAuth = (req: Request, res:Response, next: NextFunction)=>
    {

        
        const authHeader = req.headers.authorization

        if (!authHeader)
          return res.status(401).json({
            message: "Unauthorized"
          })


        const token = authHeader.split(" ")[1]

        if (!token)
          return res.status(401).json({
            message: "Unauthorized"
          })

        jwt.verify(token, "secret", (err, userToken) => {
          if (err)
            return res.status(401).json({
              message: "Unauthorized"
            })
            
            console.log(userToken)
            req.userToken = userToken
        })
        
        // este next es muy importante para que continue
        next()
    }

    // por aca pasa la validacion de usuario