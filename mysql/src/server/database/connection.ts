import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1800',
    database: 'sakila'
})

connection.connect((err)=>{
    try{
        if(err){
            throw err;
        }
        console.log("Connect to SQL");
        
    }
    catch(error){
        console.log(`can't connect to SQL: ${error}`);
        
    }
});

export default connection;

// connection.query("SELECT * FROM actor", (err:any, result:any, fields:any)=>{
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