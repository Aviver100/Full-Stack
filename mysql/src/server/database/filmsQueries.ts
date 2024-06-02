import Film from "./Film";
// import connection from "./connection";
import { runSelect } from "./sdUtils";

export async function getAllFilms() {
    return runSelect<Film>("SELECT * FROM actor");
}


// connection.query("SELECT * FROM actor", (err: any, result: any, fields: any) => {
//     try {
//         if (err) {
//             throw err;
//         }
//         console.log(result);
//         console.log(fields);

//     } catch (error) {
//         console.log(`can't: ${error}`);

//     }
// })



