import { NextFunction, Request, Response } from "express";
import cyber from "../2-utils/cyber";
import { UnauthorizedError } from "../4-models/error-model";

async function blockNonLoggedIn(request: Request, response: Response, next: NextFunction) {
    try {
        const isValid = await cyber.verifyToken(request);
        if(!isValid) throw new UnauthorizedError("You are not logged in");
        next();
    }
    catch(err: any) {
        next(err);
    }
    
}

export default blockNonLoggedIn;
