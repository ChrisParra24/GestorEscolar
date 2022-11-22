const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    const query = "SELECT periodos.id,periodos.nombre,periodos.anio,status.status FROM periodos JOIN status ON periodos.statusid = status.id;";
    const resultado = await db.query(query);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.get = async (req,res) => {
    const id = req.params.id;
    const query = "SELECT periodos.id, periodos.nombre, periodos.anio,status.status FROM periodos JOIN status ON periodos.statusid = status.id WHERE periodos.id = $1";
    const resultado = await db.query(query,[id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.create = async (req, res) => {
    const {nombre,anio,statusid} = req.body;
    const query = "INSERT INTO periodos (nombre,anio,statusid) VALUES ($1,$2,$3)";
    const resultado = await db.query(query,[nombre,anio,statusid]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    const query = "DELETE FROM periodos WHERE id = $1";
    const resultado = await db.query(query,[id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.update = async (req,res) => {
    const id = req.params.id;
    const {nombre,anio,statusid} = req.body;

    const query = "UPDATE periodos SET nombre = $1, anio = $2, statusid = $3 WHERE id = $4";
    const resultado = await db.query(query,[nombre,anio,statusid,id]);

    utils.check(res,resultado.rowCount,resultado.rows);
};