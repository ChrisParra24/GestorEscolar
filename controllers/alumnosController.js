const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    const query = "SELECT * FROM alumnos";
    const resultado = await db.query(query);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.get = async (req,res) => {
    const nombre = req.params.nombre;
    const query = "SELECT * FROM alumnos WHERE name = $1";
    const resultado = await db.query(query,[nombre]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.create = async (req, res) => {
    const status = req.body.status;
    const query = "INSERT INTO alumnos (status) VALUES ($1)";
    const resultado = await db.query(query,[status]);
    console.log(resultado);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.delete = async (req,res) => {
    const nombre = req.params.nombre;
    const query = "DELETE FROM alumnos WHERE status = $1";
    const resultado = await db.query(query,[nombre]);
    console.log(resultado);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.update = async (req,res) => {
    const name = req.params.nombre;
    const {status} = req.body;

    const query = "UPDATE status SET status = $1 WHERE status = $2";
    const resultado = await db.query(query,[status,name]);
    console.log(resultado);
    utils.check(res,resultado.rowCount,resultado.rows);
};