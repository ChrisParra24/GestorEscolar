const express = require('express');
const controller = require('../controllers/alumnosenclasesController');

const router = express.Router();


router.route('/')
    .get(controller.getAll)
    .post(controller.create);

router.route('/:alumnoid/:claseid')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);

router.route('/alumno/:alumnoid')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);

router.route('/clase/:claseid')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;

