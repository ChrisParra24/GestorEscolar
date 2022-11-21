const express = require('express');
const controller = require('../controllers/alumnosenclasesController');

const router = express.Router();


router.route('/')
    .get(controller.getAll)
    .post(controller.multi)
    .put(controller.update)
    .delete(controller.delete);


module.exports = router;

