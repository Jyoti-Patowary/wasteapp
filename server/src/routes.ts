import { Express, Request, Response } from "express";



export default function (app: Express){
    app.get('/heathcheckup', (req: Request, res: Response) => res.sendStatus(200));


    //Register User
    app.post('/api/customer');
}