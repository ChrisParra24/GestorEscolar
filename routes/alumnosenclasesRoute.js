const express = require('express');
const controlleer = require('../controllers/alumnosenclasesController');

const router = express.Router();


router.route('/')
    .get(controlleer.getAll)
    .post(controlleer.create);

router.route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;

