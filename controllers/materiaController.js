const db = require('../database/db');

exports.checkNombre = (req,res,next,value) => {
    if(typeof(value) !== 'string'){
        res.status(404).json({
            message : "Incorrect input format"
        });
    }
    next();
};

exports.getAll = async (req,res)=>{
    const query = "SELECT * FROM materias";
    const {rows} = await db.query(query);
    res.status(200).json({
        message : "success!",
        data : rows
    });
};

exports.get = async (req,res) => {
    const name = req.params.nombre;
    const query = "SELECT * FROM materias WHERE nombre = $1";
    const {rows} = await db.query(query,[name]);
    res.status(200).json({
        message : "success!",
        data : rows
    });
};

exports.create = async (req, res) => {
    const nombre = req.body.nombre;
    const query = "INSERT INTO materias (nombre) VALUES ($1)";
    const resultado = await db.query(query,[nombre]);
    console.log(resultado);
    res.status(201).json({
        message : "success creating!"
    })
};

exports.delete = async (req,res) => {
    const nombre = req.params.nombre;
    const query = "DELETE FROM materias WHERE nombre = $1";
    const resultado = await db.query(query,[nombre]);
    console.log(resultado);
    res.status(200).json({
        message : "success deleting"
    });
};

exports.update = async (req,res) => {
    const name = req.params.nombre;
    const {nombre} = req.body;

    const query = "UPDATE materias SET nombre = $1 WHERE nombre = $2";
    const resultado = await db.query(query,[nombre,name]);
    console.log(resultado);

    res.status(200).json({
        message : "success updating!" 
    });
};