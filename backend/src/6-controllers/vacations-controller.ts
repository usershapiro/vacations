import express, { Request, Response, NextFunction } from "express";
import blockNonLoggedIn from "../3-middleware/block-non-logged-in";
import vacationsLogic from "../5-logic/vacations-logic";
import VacationsModel from "../4-models/vacations-model";
import blockNonAdmin from "../3-middleware/block-non-admin";
import FollowerModel from "../4-models/followers-model";
import followersLogic from "../5-logic/followers-logic";


const router = express.Router();

router.get("/vacations", 
//  [blockNonLoggedIn],
 async (request: Request, response: Response, next: NextFunction) => {
    try {
        const vacations = await vacationsLogic.getAllVacations ();
        response.json(vacations);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/vacations-by-code/:vacationCode", 

 async (request: Request, response: Response, next: NextFunction) => {
    try {
        const vacationCode = + request.params.vacationCode
        const vacation = await vacationsLogic.getVacationByCode(vacationCode);
        response.json(vacation);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/vacations",[blockNonAdmin],async(request: Request, response: Response, next: NextFunction)=>{
  try{
    const vacation= new VacationsModel(request.body);
    const addedVacation = await vacationsLogic.addVaction(vacation);
    response.status(201).json(addedVacation);
  }
  catch(err){
    next(err)
  }
})

// router.post("/followers/:id/:vacationcode",async(request: Request, response: Response, next: NextFunction)=>{
//   try{
//     const id = + request.params.id
//     const vacationCode = + request.params.vacationCode
//     const addedFollower = await followersLogic.addFollwoer(id,vacationCode)
//     response.status(201).json( addedFollower);
//   }
//   catch(err){
//     next(err)
//   }
// })

router.post("/followers/:id/:vacationcode", async (request: Request, response: Response, next: NextFunction) => {
  try {
    const id = parseInt(request.params.id);
    const vacationCode = parseInt(request.params.vacationcode);

    if (isNaN(id) || isNaN(vacationCode)) {
      throw new Error("Invalid parameters");
    }

    const addedFollower = await followersLogic.addFollwoer(id, vacationCode);
    response.status(201).json(addedFollower);
  } catch (err) {
    next(err);
  }
});




// router.get("/followers", 
// //  [blockNonLoggedIn],
//  async (request: Request, response: Response, next: NextFunction) => {
//     try {
//         const followers = await followersLogic.getFollowersByVacation(vacationCode);
//         response.json(followers);
//     }
//     catch (err: any) {
//         next(err);
//     }
// });

export default router;