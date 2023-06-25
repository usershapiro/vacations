import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import VacationsModel from "../4-models/vacations-model";
import { ValidationError } from "../4-models/error-model";
import { v4 as uuid } from "uuid"; // v4 function changed to uuid name.
import path from "path";

async function getAllVacations() {
    const sql = `
    SELECT vacationCode, destination,description,
     DATE_FORMAT(startDate, '%d-%m-%Y') AS startDate,
     DATE_FORMAT(endDate, '%d-%m-%Y') AS endDate,
      price,
      imageFile FROM vacations
      ORDER BY startDate;
      ;
     `;
    const vacations = await dal.execute(sql);
    console.log(vacations)
    return vacations;
}

async function getVacationByCode(vacationCode : number):Promise<VacationsModel> {
   const sql =
   `SELECT 
   vacationCode, destination,description,
     DATE_FORMAT(startDate, '%d-%m-%Y') AS startDate,
     DATE_FORMAT(endDate, '%d-%m-%Y') AS endDate,
      price,
      imageFile
   FROM vacations WHERE vacations.vacationCode = ? `;
   const vacations = await dal.execute(sql , [vacationCode])
   const vacation = vacations[0]
   return vacation
}

async function addVaction (vacation: VacationsModel):Promise<VacationsModel> {
    // Validation: 
    const errors = vacation.validate()
    if(errors) throw new ValidationError(errors);
   
     try{
        if (vacation.image) {
            const extension =path.extname(  vacation.image.name)
            vacation.imageFile = uuid() + extension;
            const pathToKeep = "../1-assests/images/"+ vacation.imageFile;
            await vacation.image.mv(pathToKeep)
            delete vacation.image;
        }
     }
   catch(err:any){
    console.log(err)
   }


    const sql=`INSERT INTO vacations
     VALUES ( DEFAULT,
        ?,
        ?, 
        ?,
        ?, 
        ?,
        ?)`;
    
    const info: OkPacket = await dal.execute(sql, [vacation.destination, vacation.description, vacation.startDate,
         vacation.endDate, vacation.price
        //   vacation.imageFile
        ]);
    vacation.vacationCode=info.insertId
    console.log(vacation)
    return vacation
}
;



export default {
    getAllVacations,
    getVacationByCode,
    addVaction
};
