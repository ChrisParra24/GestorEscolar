const db = require('../database/db');
const utils = require('./utils');

const crypto = require('crypto');

exports.login = async (req, res) => {
    const user = req.body.user;
    const passwordSend = req.body.password;

    let query = "SELECT * FROM usuarios WHERE username = $1 AND password = $2 LIMIT 1";
    const resultado = await db.query(query,[user, passwordSend]);
    if (resultado.rowCount < 1) {
        res.status(404).json({
            message : "[!] Error en el usuario o contraseña",
            data : false
        });
        return;
    }

    res.status(200).json({
        message : "[+] Correcto",
        data : true
    });
};

exports.get = async (req,res) => {
    res.status(200).json({
        message : "[i] Loggin activo",
        data : true
    });
    return;
};