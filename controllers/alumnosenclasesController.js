const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    const query = "SELECT * FROM alumnosenclases";
    const resultado = await db.query(query);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.multi = async (req, res) => {
    /*
    json post request schema
    {
        "type": <type>       
        "alumnosid": UUID
        "calificacion": float
        "clasesid": UUID
        "statusid": UUID
    }

    Where param type
        type: create Genera nuevo
        type: getspefic obtiene una clase y y un alumno
        type: getbyalum obtiene todas las clases de un alumno
        type: getbyclas obtiene todos los alumnos de una clase
    */
    
    const type          = req.params.type; 
    const alumnosid     = req.params.alumnosid;
    const calificacion  = req.params.alumnosid;
    const clasesid      = req.params.alumnosid;
    const statusid      = req.params.alumnosid;

    let query = "";
    let resultado;
    switch (type) {
        case "create":
            query = "";
            query = "INSERT INTO alumnosenclases ";
            query += "(alumnosid,calificacion,clasesid,statusid) ";
            query += "VALUES ($1,$2,$3,$4)";
            resultado = await db.query(query,[alumnosid,calificacion,clasesid,statusid]);
            break;
        
        // Get by alumno id
        case "getbyalum":
            query = "";
            query = "SELECT * FROM alumnosenclases WHERE alumnosid = $1";
            resultado = await db.query(query,[alumnosid]);
            break;

        // get va clase ID
        case "getbyclas":
            query = "";
            query = "SELECT * FROM alumnosenclases WHERE clasesid = $1";
            resultado = await db.query(query,[clasesid]);
            break;

        case "getspefic":
            query = "";
            query = "SELECT * FROM alumnosenclases WHERE alumnosid = $1 AND clasesid = $2";
            resultado = await db.query(query,[alumnosid,clasesid]);
            break;

        default:
            res.status(404).json({
                message : "[!] No se encontro type o type erroneo"
            });
            return;
            break;
    }

    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.delete = async (req,res) => {
    /*
    json delete request schema
    {
        "type": <type>,       
        "alumnosid": UUID,
        "clasesid": UUID,
    }

    Where param type
        type: spefic elimina una clase y un alumno
        type: byalum elimina todas las clases de un alumno
        type: byclas elimina todos los alumnos de una clase
    */
    
    const type          = req.params.type; 
    const alumnosid     = req.params.alumnosid;
    const clasesid      = req.params.alumnosid;

    let query = "";
    let resultado;
    switch (type) {  
        // by alumno id
        case "byalum":
            query = "";
            query = "DELETE FROM alumnosenclases WHERE alumnosid = $1";
            resultado = await db.query(query,[alumnosid]);
            break;

        // By clase ID
        case "byclas":
            query = "";
            query = "DELETE FROM alumnosenclases WHERE clasesid = $1";
            resultado = await db.query(query,[clasesid]);
            break;

        case "spefic":
            query = "";
            query = "DELETE FROM alumnosenclases WHERE alumnosid = $1 AND clasesid = $2";
            resultado = await db.query(query,[alumnosid,clasesid]);
            break;

        default:
            res.status(404).json({
                message : "[!] No se encontro type o type erroneo"
            });
            return;
            break;
    }

    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.update = async (req,res) => {

    /*
    json put request schema
    {
        "type": <type>       
        "alumnosid": UUID
        "calificacion": float
        "clasesid": UUID
        "statusid": UUID
    }

    Where param type
        type: spefic elimina una clase y un alumno
        type: byalum elimina todas las clases de un alumno
        type: byclas elimina todos los alumnos de una clase
    */
    
    const type          = req.params.type; 
    const alumnosid     = req.params.alumnosid;
    const calificacion  = req.params.alumnosid;
    const clasesid      = req.params.alumnosid;
    const statusid      = req.params.alumnosid;

    let query = "";
    let resultado;
    switch (type) {  
        // by alumno id
        case "byalum":
            query = "";
            query = "UPDATE alumnosenclases SET ";
            query += "alumnosid = $1 , calificacion = $2 , clasesid = $3, statusid = $4 ";
            query += "WHERE alumnosid = $5";
            resultado = await db.query(query,[alumnosid,calificacion,clasesid, statusid,alumnosid]);
            break;

        // By clase ID
        case "byclas":
            query = "";
            query = "UPDATE alumnosenclases SET ";
            query += "alumnosid = $1 , calificacion = $2 , clasesid = $3, statusid = $4 ";
            query += "WHERE clasesid = $5";
            resultado = await db.query(query,[alumnosid,calificacion,
                clasesid, statusid,clasesid]);
            break;

        case "spefic":
            query = "";
            query = "UPDATE alumnosenclases SET ";
            query += "alumnosid = $1 , calificacion = $2 , clasesid = $3, statusid = $4 ";
            query += "WHERE alumnosid = $5 AND clasesid = $6";
            resultado = await db.query(query,[alumnosid,
                calificacion,clasesid, 
                statusid,alumnosid,clasesid]);
            break;

        default:
            res.status(404).json({
                message : "[!] No se encontro type o type erroneo"
            });
            return;
            break;
    }

    utils.check(res,resultado.rowCount,resultado.rows);
};