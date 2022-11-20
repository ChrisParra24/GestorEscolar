const { Pool } = require('pg');

const pool = new Pool({
    host : process.env.DATABASE_HOST,
    port : process.env.DATABASE_PORT,
    database : process.env.DATABASE_NAME,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD.concat('#')
});
    
pool.connect((error) => {
    if(error){
        console.log(`Error de conexion con BD: ${error}`);
    }
});

exports.query = async (text,params) => {
    return await pool.query(text,params);
}
