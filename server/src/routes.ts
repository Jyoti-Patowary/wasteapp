import { Express, Request, Response } from "express";
import { request } from "http";


export default function (app: Express){
    app.get('/heathcheckup', (req: Request, res: Response) => res.sendStatus(200));
}