import Joi from "joi";

class VacationsModel {
    
    public vacationCode: number;
    public destination: string;
    public description: string;
    public startDate: string;
    public endDate: string;
    public price:number;
    public imageFile:string;

    public constructor(vacation:VacationsModel) {
        this.vacationCode = vacation.vacationCode;
        this.destination = vacation.description
        this.startDate = vacation.startDate;
        this.endDate = vacation.endDate;
        this.price = vacation.price;
        this.imageFile = vacation.imageFile;
    }

    private static ValidationSchema = Joi.object({
        vacationCode: Joi.number().optional().positive().integer(),
        destination: Joi.string().required().min(2).max(150),
        startDate:Joi.string().isoDate(),
        endDate:Joi.string().isoDate(),
        price: Joi.number().required().min(0).max(20000)
    });

    public validate(): string {
        const result = VacationsModel.ValidationSchema.validate(this);
        return result.error?.message;
    }

}

export default VacationsModel;
