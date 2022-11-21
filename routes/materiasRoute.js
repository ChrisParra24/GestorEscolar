const express = require('express');
const controller = require('../controllers/materiasController');

const router = express.Router();

router.param('nombre',controller.checkNombre);

router.route('/')
    .get(controller.getAll)
    .post(controller.create);

router.route('/:nombre')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete)

module.exports = router;

