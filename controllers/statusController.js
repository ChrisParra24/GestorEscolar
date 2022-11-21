const db = require('../database/db');

exports.getAllStatus = async (req,res) => {
    const query = "SELECT * FROM status";
    const { rows } = await db.query(query);
    res.status(200).json(rows)
};

exports.get = (req,res) => {

};

exports.create = () => {

};

exports.delete = (req,res) => {

};

exports.update = (req,res) => {

};