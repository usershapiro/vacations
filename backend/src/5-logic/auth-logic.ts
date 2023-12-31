import { OkPacket } from "mysql";
import cyber from "../2-utils/cyber";
import dal from "../2-utils/dal";
import CredentialsModel from "../4-models/credentials-model";
import { ResourceNotFoundError, UnauthorizedError, ValidationError } from "../4-models/error-model";
import UserModel from "../4-models/user-model";



async function register(user: UserModel):Promise<string> {

    const error = user.validate();
    if(error) throw new ValidationError(error);
    if (await isUsernameTaken(user.email)) throw new ValidationError(`Email ${user.email} is already taken`);
   
    user.password = cyber.hash(user.password);
    user.role = "user"

    const sql=`INSERT INTO users VALUES(DEFAULT,?,?,?,?,?)`;

    await dal.execute(sql,[
        user.firstName,user.lastName,
        user.email,user.password,user.role]);
     const token = cyber.getNewToken(user);
     return token
    
}

async function login(credentials: CredentialsModel) : Promise<string>{

  const error = credentials.validate();
  if (error) throw new ValidationError(error);

  credentials.password = cyber.hash(credentials.password);
  console.log(credentials.password)
  const sql =`SELECT * FROM users WHERE email=? AND password=?`;
  
  const users = await dal.execute(sql,[credentials.email, credentials.password]);
  
  if (users.length === 0) throw new UnauthorizedError("Incorrect email or password");
 
  const user = users[0];
  const token = cyber.getNewToken(user);
  console.log(token)
  return token;




}

async function isUsernameTaken(email: string): Promise<boolean> {

    const sql = `SELECT COUNT (*) FROM users WHERE email =?`
    const count = await dal.execute(sql,[email])[0];
    return count> 0
}

async function getOneUser(id: number):Promise<UserModel>{
  
    const sql="SELECT * FROM users WHERE id=? "
    const users = await dal.execute(sql,[id]);
    if (users.length === 0) throw new ResourceNotFoundError(id);
    const user = users[0];
    return user;

} 


export default {
    register,
    login,
    isUsernameTaken,
    getOneUser
}