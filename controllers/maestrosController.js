const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    let query = "SELECT maestros.id, maestros.numtrabajador, ";
    query += "usuarios.nombrepila, usuarios.apppaterno, ";
    query += "usuarios.appmaterno, usuarios.email, usuarios.telefono, ";
    query += "usuarios.username, status.status as estado FROM maestros ";
    query += "INNER JOIN usuarios ON maestros.usuariosid = usuarios.id ";
    query += "INNER JOIN status ON usuarios.statusid = status.id;";
    const resultado = await db.query(query);

    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.get = async (req,res) => {
    const id = req.params.id;
    let query = "SELECT maestros.id, maestros.numtrabajador, ";
    query += "usuarios.nombrepila, usuarios.apppaterno, ";
    query += "usuarios.appmaterno, usuarios.email, usuarios.telefono, ";
    query += "usuarios.username, status.status as estado FROM maestros ";
    query += "INNER JOIN usuarios ON maestros.usuariosid = usuarios.id ";
    query += "INNER JOIN status ON usuarios.statusid = status.id";
    query += "WHERE maestros.id = $1;";

    const resultado = await db.query(query,[id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.create = async (req, res) => {
    const numtrabajador = req.body.numtrabajador;
    const usuariosid = req.body.usuariosid;

    const query1 = "SELECT * FROM usuarios WHERE id = $1 LIMIT 1";
    const result = await db.query(query1,[usuariosid]);
    if (result.rowCount < 1) {
        res.status(404).json({
            message : "[!] Usuario Invalido | Cree un nuevo usuario para el profesor:"+ numtrabajador
        });
        return;
    }

    const query = "INSERT INTO maestros (numtrabajador,usuariosid) VALUES ($1,$2)";
    const resultado = await db.query(query,[numtrabajador,usuariosid]);

    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    const query = "DELETE FROM maestros WHERE id = $1";
    const resultado = await db.query(query,[id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.update = async (req,res) => {
    const id = req.params.id;
    const numtrabajador = req.body.numtrabajador;
    const usuariosid = req.body.usuariosid;

    let query = "UPDATE maestros SET ";
    query += "numtrabajador = $1, usuariosid = $2 WHERE id = $3";
    const resultado = await db.query(query,[numtrabajador,usuariosid,id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};