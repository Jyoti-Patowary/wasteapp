import { DocumentDefinition } from "mongoose";
import Customer, {customerDocument} from "../model/customer.model";


export async function createCustomer(input: DocumentDefinition<customerDocument>){
    try{
        return await Customer.create(input);
    } catch (error) {
        throw new Error("error");
    }
}

function findCustomer() {}