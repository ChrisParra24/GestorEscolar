const db = require('../database/db');
const utils = require('./utils');

const crypto = require('crypto');

exports.login = async (req, res) => {
    const user = req.body.user;
    const passwordSend = req.body.password;

    let query = "SELECT id,nombrepila,apppaterno,username,roluser,statusid "
    query += "FROM usuarios WHERE username = $1 AND password = $2 LIMIT 1";
    const resultado = await db.query(query,[user, passwordSend]);
    if (resultado.rowCount < 1) {
        res.status(404).json({
            message : "[!] Error en el usuario o contraseña",
            data : false
        });
        return;
    }

    utils.check(res,resultado.rowCount,resultado.rows);
};
