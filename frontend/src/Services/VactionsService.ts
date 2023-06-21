import axios from "axios";
import appConfig from "../Utils/appConfig";
import VacationsModel from "../Models/VacationModel";
import FollowerModel from "../Models/FollowerModel";



class VacationsService  {

    public async getAllVacations():Promise <VacationsModel[]>{
        const response = await axios.get(appConfig.vacationsUrl);
        const vacations = response.data;
        return vacations
    }

    public async getVacationByCode(vacationCode:number):Promise <VacationsModel>{
         const response = await axios.get<VacationsModel>(appConfig.vacationByCodeUrl + vacationCode);
         const vacationByCode = response.data;
        
         return vacationByCode
    }

    public async addFollower(id:number,vacationCode:number):Promise<void>{
         await axios.post<FollowerModel>(appConfig.addFollow +id +vacationCode );
        
    }
    // public async deleteProduct(productId:number):Promise<void>{
    //      await axios.delete(appConfig.deleteProduct + productId);
    // }


}
const vacationsService = new VacationsService()
export default vacationsService