const db = require('../database/db');
const utils = require('./utils');

const crypto = require('crypto');
//const hash = crypto.createHash('sha256').update(input).digest('base64');

exports.login = async (req, res) => {
    const user = req.body.user;
    const passwordSend = req.body.password;

    let query = "SELECT * FROM usuarios WHERE username = $1 AND password = $2 LIMIT 1";
    const resultado = await db.query(query,[user, passwordSend]);
    if (resultado.rowCount < 1) {
        res.status(404).json({
            message : "[!] Error en el usuario o contraseña"
        });
        return;
    }


    res.status(200).json({
        message : "[+] Correcto"
    });
    //
};
