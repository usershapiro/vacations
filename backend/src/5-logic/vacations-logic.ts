import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import VacationsModel from "../4-models/vacations-model";

async function getAllVacations() {
    const sql = `
    SELECT vacationCode, destination,description,
     DATE_FORMAT(startDate, '%d-%m-%Y') AS startDate,
     DATE_FORMAT(endDate, '%d-%m-%Y') AS endDate,
      price,
      imageFile FROM vacations;
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

async function addVaction (vacation: VacationsModel) {
    const sql=`INSERT INTO users VALUES(DEFAULT,?,?,?,?,?)`;
    const info: OkPacket = await dal.execute(sql,[vacation.destination,vacation.startDate,vacation.endDate,vacation.price,vacation.imageFile]);
    vacation.vacationCode=info.insertId
    return vacation
}
;



export default {
    getAllVacations,
    getVacationByCode,
    addVaction
};
