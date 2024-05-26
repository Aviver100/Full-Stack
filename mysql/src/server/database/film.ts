import { RowDataPacket } from "mysql2";

interface Film extends RowDataPacket{
    film_id: number,
    title: string,
    description: string,
    release_year: number,
    language_id: number,
    original_language_id: number,
    rental_duration: number,
    rental_rate: string,
    length: number,
    replacement_cost: string,
    rating: string,
    special_features: string,
    last_update: string
}

export default Film;

// import connection from "./connection";

// connection.query("SELECT * FROM film", (err:any, result:any, fields:any)=>{
//     try{
//         if(err){
//             throw err;
//         }
//         console.log(result);
//         console.log(fields);
        
//     }catch(error){
//         console.log(`can't: ${error}`);
        
//     }
// })