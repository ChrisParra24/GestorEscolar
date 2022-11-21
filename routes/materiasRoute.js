const express = require('express');
const materiaController = require('../controllers/materiaController');

const router = express.Router();

router.param('nombre',materiaController.checkNombre);

router.route('/')
    .get(materiaController.getAll)
    .post(materiaController.create);

router.route('/:nombre')
    .get(materiaController.get)
    .put(materiaController.update)
    .delete(materiaController.delete)

module.exports = router;