const db = require('../database/db');
const utils = require('./utils');

exports.getAll = async (req,res) => {
    const query = "SELECT * FROM horarios";
    const resultado = await db.query(query);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.get = async (req,res) => {
    const id = req.params.id;
    const query = "SELECT * FROM horarios WHERE id = $1";
    const resultado = await db.query(query,[id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.create = async (req, res) => {
    let {horainicio,horafin,dia,esVirtual} = req.body;
    
    esVirtual = conversionStringToBoolean(esVirtual);
    dia = conversionDiaToCaracter(dia);

    const query = "INSERT INTO horarios (horainicio,horafin,dia,esVirtual) VALUES ($1,$2,$3,$4)";
    const resultado = await db.query(query,[horainicio,horafin,dia,esVirtual]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.delete = async (req,res) => {
    const id = req.params.id;
    const query = "DELETE FROM horarios WHERE id = $1";
    const resultado = await db.query(query,[id]);
    utils.check(res,resultado.rowCount,resultado.rows);
};

exports.update = async (req,res) => {
    const id = req.params.id;
    let {horainicio,horafin,dia,esVirtual} = req.body;

    esVirtual = conversionStringToBoolean(esVirtual);
    dia = conversionDiaToCaracter(dia);

    const query = "UPDATE horarios SET horainicio = $1, horafin = $2, dia = $3, esVirtual = $4 WHERE id = $5";
    const resultado = await db.query(query,[horainicio,horafin,dia,esVirtual,id]);

    utils.check(res,resultado.rowCount,resultado.rows);
};

conversionStringToBoolean = (cadena) => {
    if(cadena === "Si" || cadena === "si"){
        return true;
    }else{
        return false;
    }
};

conversionDiaToCaracter = (dia) => {
    return dia === "Martes" || dia === "martes" ? 'T' : dia[0].toUpperCase()
};