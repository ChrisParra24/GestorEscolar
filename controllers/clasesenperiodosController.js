const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    const query = "SELECT * FROM clasesenperiodos";
    const resultado = await db.query(query);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.multi = async (req, res) => {
    /*
    json post request schema
    {
        "type": <type>    ,   
        "periodosid": UUID,
        "clasesid": UUID
    }

    Where param type
        type: create Genera nuevo
        type: spefic 
        type: byperi 
        type: byclas
    */
    
    const type          = req.params.type; 
    const periodosid    = req.params.alumnosid;
    const clasesid      = req.params.alumnosid;

    let query = "";
    let resultado;
    switch (type) {
        case "create":
            query = "";
            query = "INSERT INTO clasesenperiodo";
            query += "(periodosid,clasesid) ";
            query += "VALUES ($1,$2)";
            resultado = await db.query(query,[periodosid,clasesid]);
            break;
        
        // BY
        case "byperi":
            query = "";
            query = "SELECT * FROM clasesenperiodo "
            query += "WHERE periodosid = $1";
            resultado = await db.query(query,[periodosid]);
            break;

        // By
        case "byclas":
            query = "";
            query = "SELECT * FROM clasesenperiodo "
            query += "WHERE clasesid = $1";
            resultado = await db.query(query,[clasesid]);
            break;

        case "spefic":
            query = "";
            query = "SELECT * FROM clasesenperiodo "
            query += "WHERE periodosid = $1 AND clasesid = $2";
            resultado = await db.query(query,[periodosid,clasesid]);
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
    json post request schema
    {
        "type": <type>    ,   
        "periodosid": UUID,
        "clasesid": UUID
    }

    Where param type
        type: spefic 
        type: byperi 
        type: byclas
    */

    const type          = req.params.type; 
    const periodosid    = req.params.alumnosid;
    const clasesid      = req.params.alumnosid;

    let query = "";
    let resultado;
    switch (type) {
        // BY
        case "byperi":
            query = "";
            query = "DELETE FROM clasesenperiodo "
            query += "WHERE periodosid = $1";
            resultado = await db.query(query,[periodosid]);
            break;

        // By
        case "byclas":
            query = "";
            query = "DELETE FROM clasesenperiodo "
            query += "WHERE clasesid = $1";
            resultado = await db.query(query,[clasesid]);
            break;

        case "spefic":
            query = "";
            query = "DELETE FROM clasesenperiodo "
            query += "WHERE periodosid = $1 AND clasesid = $2";
            resultado = await db.query(query,[periodosid,clasesid]);
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
    const type          = req.params.type; 
    const periodosid    = req.params.alumnosid;
    const clasesid      = req.params.alumnosid;

    let query = "";
    let resultado;
    switch (type) {
        // BY
        case "byperi":
            query = "";
            query = "UPDATE clasesenperiodos SET ";
            query += "periodosid = $1 , clasesid = $2 ";
            query += "WHERE periodosid = $3";
            resultado = await db.query(query,[periodosid,clasesid,periodosid]);
            break;

        // By
        case "byclas":
            query = "";
            query = "UPDATE clasesenperiodos SET ";
            query += "periodosid = $1 , clasesid = $2 ";
            query += "WHERE clasesid = $3";
            resultado = await db.query(query,[periodosid,clasesid,clasesid]);
            break;

        case "spefic":
            query = "";
            query = "UPDATE clasesenperiodos SET ";
            query += "periodosid = $1 , clasesid = $2 ";
            query += "WHERE periodosid = $3 AND clasesid = $4";
            resultado = await db.query(query,[periodosid,clasesid,periodosid,clasesid]);
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