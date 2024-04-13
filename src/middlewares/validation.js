import { request, response } from "express";
import { validationResult } from "express-validator";


export const validateFields = ( req=request, res=response, next ) => {

    const errorList = validationResult(req);
    if(!errorList.isEmpty()) return res.status(400).json({ errors: errorList.array() });
    
    next();
}

