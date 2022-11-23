import {Request, Response} from "express"
import {omit} from "lodash"
import { createCustomer } from "../service/customer.service"

export async function createCustomerHandle(req: Request, res: Response) {
    try{
        const customer = await createCustomer(req.body)
        return res.send(omit(customer.toJSON(), "password"))
    } catch(e: any) {
        console.log(e);
        return res.status(409).send(e.message);
    }
}