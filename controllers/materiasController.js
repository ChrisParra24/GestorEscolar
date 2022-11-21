const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res)=>{
    const query = "SELECT * FROM materias";
    const resultado = await db.query(query);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.get = async (req,res) => {
    const id = req.params.id;
    const query = "SELECT * FROM materias WHERE id = $1";
    const resultado = await db.query(query,[id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    const query = "DELETE FROM materias WHERE id = $1";
    const resultado = await db.query(query,[id]);

    console.log(resultado);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.create = async (req, res) => {
    const nombre = req.body.nombre;
    const statusid = req.body.statusid;
    const query = "INSERT INTO materias (nombre,statusid) VALUES ($1,$2)";
    const resultado = await db.query(query,[nombre,statusid]);

    console.log(resultado);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.update = async (req,res) => {
    const id = req.params.id;
    const statusid = req.body.statusid;
    const {nombre} = req.body;

    const query = "UPDATE materias SET nombre = $1,  statusid = $2 WHERE id = $3";
    const resultado = await db.query(query,[nombre,statusid,id]);

    console.log(resultado);
    utils.check(res,resultado.rowCount,resultado.rows);
};