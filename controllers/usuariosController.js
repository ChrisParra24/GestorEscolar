const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    const query = "SELECT usuarios.id, usuarios.nombrepila, usuarios.apppaterno,usuarios.appmaterno,usuarios.email,usuarios.telefono,usuarios.username,usuarios.password,status.status FROM usuarios JOIN status ON usuarios.statusid = status.id;";
    const resultado = await db.query(query);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.get = async (req,res) => {
    const id = req.params.id;
    const query = "SELECT * FROM usuarios WHERE id = $1";
    const resultado = await db.query(query,[id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.create = async (req, res) => {
    const {nombre,appPaterno,appMaterno,email,telefono,username,password,statusid} = req.body;
    const query = "INSERT INTO usuarios (nombrepila,apppaterno,appmaterno,email,telefono,username,password,statusid) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)";
    const resultado = await db.query(query,[nombre,appPaterno,appMaterno,email,telefono,username,password,statusid]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    const query = "DELETE FROM usuarios WHERE id = $1";
    const resultado = await db.query(query,[id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.update = async (req,res) => {
    const id = req.params.id;
    const {nombre,appPaterno,appMaterno,email,telefono,username,password,statusid} = req.body;
    const query = "UPDATE usuarios SET nombrepila = $1, apppaterno = $2, appmaterno = $3, email = $4, telefono = $5, username = $6, password = $7, statusid = $8 WHERE id = $9";
    const resultado = await db.query(query,[nombre,appPaterno,appMaterno,email,parseInt(telefono),username,password,statusid,id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};