const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    let query = "SELECT usuarios.id, usuarios.nombrepila, "
    query += "usuarios.apppaterno,usuarios.appmaterno,usuarios.email, ";
    query += "usuarios.telefono,usuarios.username, usuarios.roluser, status.status ";
    query += "FROM usuarios JOIN status ON usuarios.statusid = status.id;";
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
    const {nombre,appPaterno,appMaterno,email,telefono,username,password,statusid,roluser} = req.body;
    let query = "INSERT INTO usuarios (nombrepila,apppaterno,appmaterno,email, ";
    query += "telefono,username,password,statusid,roluser) ";
    query += "VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
    const resultado = await db.query(query,[nombre,appPaterno,appMaterno,email,telefono,username,password,statusid,roluser]);
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
    let query = "UPDATE usuarios SET nombrepila = $1, apppaterno = $2, ";
    query += "appmaterno = $3, email = $4, telefono = $5, username = $6, ";
    query += "password = $7, statusid = $8, roluser = $9 WHERE id = $9";
    const resultado = await db.query(query,[nombre,appPaterno,appMaterno,email,parseInt(telefono),username,password,statusid,id,roluser]);
    utils.check(res,resultado.rowCount,resultado.rows);
};