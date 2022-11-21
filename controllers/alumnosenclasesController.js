const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    const query = "SELECT * FROM alumnosenclases";
    const resultado = await db.query(query);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.multi = async (req, res) => {
    const type = req.params.type; 
    // type: create Genera nuevo
    // type: getspefic obtiene todas las clases de un alumno
    // type: getbyalum obtiene todas las clases de un alumno
    // type: getbyclas obtiene todos los alumnos de una clase
    const alumnosid = req.params.alumnosid;
    const calificacion = req.params.alumnosid;
    const clasesid = req.params.alumnosid;
    const statusid = req.params.alumnosid;

    let query = "";
    let resultado;
    if (type === "create") {
        query = "";
        query = "INSERT INTO alumnosenclases ";
        query += "(alumnosid,calificacion,clasesid,statusid) ";
        query += "VALUES ($1,$2,$3,$4)";
        resultado = await db.query(query,[alumnosid,calificacion,clasesid,statusid]);
    } else if (type === "getbyalum") {
        query = "";
        query = "SELECT * FROM alumnosenclases WHERE alumnosid = $1";
        const resultado = await db.query(query,[alumnosid]);
    } else if (type === "getbyclas") {
        query = "";
        
    } else if (type === "getspefic") {
        query = "";
        
    } else{
        res.status(404).json({
            message : "[!] No se encontro type o type erroneo"
        });
        return;
    }
    
    
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.delete = async (req,res) => {
    const nombre = req.params.nombre;
    const query = "DELETE FROM alumnosenclases WHERE status = $1";
    const resultado = await db.query(query,[nombre]);

    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.update = async (req,res) => {
    const name = req.params.nombre;
    const {status} = req.body;

    const query = "UPDATE alumnosenclases SET status = $1 WHERE status = $2";
    const resultado = await db.query(query,[status,name]);


    utils.check(res,resultado.rowCount,resultado.rows);
};