const express = require('express');
const controller = require('../controllers/usuariosController');

const router = express.Router();


router.route('/')
    .get(controller.getAll)
    .post(controller.create);

router.route('/:nombre')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete)

module.exports = router;
