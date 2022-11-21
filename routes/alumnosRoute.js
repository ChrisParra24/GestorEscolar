const express = require('express');
const controller = require('../controllers/alumnosController');

const router = express.Router();
// http://127.0.0.1/api/v1/alumnos/
router.route('/')
    .get(controller.getAll)
    .post(controller.create);

// http://127.0.0.1/api/v1/alumnos/uuid
router.route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;

