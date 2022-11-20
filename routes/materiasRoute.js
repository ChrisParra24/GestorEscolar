const express = require('express');
const materiaController = require('../controllers/materiaController');

const router = express.Router();

router.route('/')
    .get(materiaController.getAllMaterias);

module.exports = router;