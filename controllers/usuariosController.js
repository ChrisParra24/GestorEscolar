const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    const query = "SELECT * FROM usuarios";
    const { rows } = await db.query(query);
    res.status(200).json(rows)
};

exports.get = async (req,res) => {
    const nombre = req.params.nombre;
    const query = "SELECT * FROM usuarios WHERE status = $1";
    const {rows} = await db.query(query,[nombre]);
    res.status(200).json({
        message : "success!",
        data : rows
    });
};

exports.create = async (req, res) => {
    const status = req.body.status;
    const query = "INSERT INTO usuarios (status) VALUES ($1)";
    const resultado = await db.query(query,[status]);
    console.log(resultado);
    res.status(201).json({
        message : "success creating!"
    });
};

exports.delete = async (req,res) => {
    const nombre = req.params.nombre;
    const query = "DELETE FROM usuarios WHERE status = $1";
    const resultado = await db.query(query,[nombre]);
    console.log(resultado);
    res.status(200).json({
        message : "success deleting"
    });
};

exports.update = async (req,res) => {
    const name = req.params.nombre;
    const {status} = req.body;

    const query = "UPDATE usuarios SET status = $1 WHERE status = $2";
    const resultado = await db.query(query,[status,name]);
    console.log(resultado);

    res.status(200).json({
        message : "success updating!" 
    });
};