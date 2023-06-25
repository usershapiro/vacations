// import dal from "../2-utils/dal";
// import FollowerModel from "../4-models/followers-model";



// // async function addFollwoer (follower:FollowerModel) :Promise<FollowerModel> {
// //     // const sql= `INSERT INTO followers VALUES (?, ?);`
// //    const sql =
// //    `INSERT INTO followers (id, vacationCode)
// //    SELECT users.id , vacations.vacationCode
// //    FROM users
// //    JOIN vacations ON users.id = ?
// //    WHERE vacations.vacationCode = ?;`
 

// //     const addedFollower = await dal.execute(sql,[follower.id ,follower.vacationCode]);
// //     console.log(addedFollower)
// //     return addedFollower

// // }

// async function addFollwoer (id:number,vacationCode:number) :Promise<FollowerModel> {
//         // const sql= `INSERT INTO followers VALUES (?, ?);`
//        const sql =
//        `INSERT INTO followers (id, vacationCode)
//        SELECT users.id , vacations.vacationCode
//        FROM users
//        JOIN vacations ON users.id = ?
//        WHERE vacations.vacationCode = ?;`
     
    
//         const addedFollower = await dal.execute(sql,[id ,vacationCode]);
//         console.log(addedFollower)
//         return addedFollower
    
//     }

// async function getFollowersByVacation(vacationCode:number) {
//     const sql = `
//     SELECT  * 
//       FROM followers;
//      `;
//     const followers = await dal.execute(sql);
    
//     return followers;
// }


// export default 
// {
//     addFollwoer,
//     getFollowersByVacation
    
// };