const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    let query = "SELECT clases.id,clases.nombre as nombreclase,materias.id as idmateria, ";
    query += "materias.nombre as materia,horarios.dia as diaclase,horarios.horainicio, ";
    query += "horarios.horafin,mais.id as idmaestro,mais.nombrepila as nombremaestro,";
    query += "mais.apppaterno as apppartmaestro,mais.numtrabajador as numtrabajador,";
    query += "status.status as estadoclase FROM clases ";
    query += "INNER JOIN materias ON clases.materiasid = materias.id ";
    query += "INNER JOIN horarios ON clases.horariosid = horarios.id ";
    query += "INNER JOIN status ON materias.statusid = status.id ";
    query += "INNER JOIN (SELECT maestros.id,usuarios.nombrepila,usuarios.apppaterno,maestros.numtrabajador FROM maestros INNER JOIN usuarios ON maestros.usuariosid = usuarios.id) as mais ON clases.maestrosid = mais.id; ";
    
    const resultado = await db.query(query);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.get = async (req,res) => {
    const id = req.params.id;
    let query = "SELECT clases.id,clases.nombre as nombreclase,materias.id as idmateria, ";
    query += "materias.nombre as materia,horarios.dia as diaclase,horarios.horainicio, ";
    query += "horarios.horafin,mais.id as idmaestro,mais.nombrepila as nombremaestro,";
    query += "mais.apppaterno as apppartmaestro,mais.numtrabajador as numtrabajador,";
    query += "status.status as estadoclase FROM clases ";
    query += "INNER JOIN materias ON clases.materiasid = materias.id ";
    query += "INNER JOIN horarios ON clases.horariosid = horarios.id ";
    query += "INNER JOIN status ON materias.statusid = status.id ";
    query += "INNER JOIN (SELECT maestros.id,usuarios.nombrepila,usuarios.apppaterno,maestros.numtrabajador FROM maestros INNER JOIN usuarios ON maestros.usuariosid = usuarios.id) as mais ON clases.maestrosid = mais.id ";
    query += "WHERE clases.id = $1;";

    const resultado = await db.query(query,[id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.create = async (req, res) => {
    const nombre = req.body.nombre;
    const maestrosid = req.body.maestrosid;
    const materiasid = req.body.materiasid;
    const horariosid = req.body.horariosid;
    let query = "INSERT INTO clases (nombre,maestrosid,materiasid,horariosid) ";
    query += "VALUES ($1,$2,$3,$4)";

    const resultado = await db.query(query,[nombre,maestrosid,materiasid,horariosid]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    const query = "DELETE FROM clases WHERE id = $1";
    const resultado = await db.query(query,[id]);

    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.update = async (req,res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    const maestrosid = req.body.maestrosid;
    const materiasid = req.body.materiasid;
    const horariosid = req.body.horariosid;

    let query = "UPDATE clases SET nombre = $1, maestrosid = $2";
    query += ",materiasid = $3, horariosid1 = $4 ";
    query += "WHERE id = $5";

    const resultado = await db.query(query,[nombre,maestrosid,materiasid,horariosid,id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};