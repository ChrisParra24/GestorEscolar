const db = require('../database/db');
const utils = require('./utils');

// 127.0.0.1/alumnos
exports.getAll = async (req,res) => {
    const query = "SELECT * FROM alumnos";
    const resultado = await db.query(query);

    utils.check(res,resultado.rowCount,resultado.rows);
};

// 127.0.0.1/alumnos/id
exports.get = async (req,res) => {
    const id = req.params.id;
    let query = "SELECT alumnos.id, alumnos.usuariosid, alumnos.matricula, usuarios.nombrepila, usuarios.apppaterno, "
    query += "usuarios.appmaterno, usuarios.email, usuarios.telefono, usuarios.username, "
    query += "usuarios.password, status.status FROM alumnos ";
    query += "INNER JOIN usuarios ON alumnos.usuariosid = usuarios.id ";
    query += "INNER JOIN status ON usuarios.statusid = status.id ";
    query += "WHERE alumnos.id = $1 ; ";
    const resultado = await db.query(query,[id]);

    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.create = async (req, res) => {
    const matricula = req.body.matricula;
    const usuariosid = req.body.usuariosid;

    let query = "SELECT * FROM usuarios WHERE id = $1 LIMIT 1";
    const resultado = await db.query(query,[usuariosid]);
    if (resultado.rowCount < 1) {
        res.status(404).json({
            message : "Cree un usuario para el numero alumno:"+ matricula
        });
    }
    query = "INSERT INTO alumnos (matricula,usuariosid) VALUES ($1,$2)";
    resultado = await db.query(query,[matricula,usuariosid]);

    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    const query = "DELETE FROM alumnos WHERE id = $1";
    const resultado = await db.query(query,[id]);

    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.update = async (req,res) => {
    const id = req.params.id;
    const matricula = req.body.matricula;
    const usuariosid = req.body.usuariosid;

    const query = 'UPDATE alumnos SET matricula = $1, usuariosid = $2 WHERE id = $3';
    const resultado = await db.query(query,[matricula,usuariosid,id]);

    utils.check(res,resultado.rowCount,resultado.rows);
};