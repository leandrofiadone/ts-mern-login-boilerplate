import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'



export const loginHandler = (req: Request, res:Response)=>{

    const token = jwt.sign({
        test: "test"
        // este texto ''secret tiene que ir en el verify del requireAuth para que funcione, puede ser cualquier otro texto
    }, 'secret' ,{
        expiresIn: 60 * 60 * 24
    })

    return res.json({
      token
    })
}



export const profileHandler = (req: Request, res: Response) => {

  res.json({
    profile: req.userToken,
    message: "profile data"
  })

}

