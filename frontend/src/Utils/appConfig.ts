class Config {
    
   public vacationsUrl = "http://localhost:3001/api/vacations/"
   public vacationByCodeUrl ="http://localhost:3001/api/vacations-by-code/"
   public registerUrl = "http://localhost:3001/api/auth/register/"
   public loginUrl = "http://localhost:3001/api/auth/login/"
   public addFollow = "http://localhost:3001/api/followers/"

   }
   const appConfig = new Config()
   export default appConfig;