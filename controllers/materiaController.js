const db = require('../database/db');

exports.getAllMaterias = async (req,res)=>{
    const query = "SELECT * FROM materias";
    const resultado = await db.query(query);
    res.status(200).json(resultado.rows);
};