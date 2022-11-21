const express = require('express');
const controller = require('../controllers/statusController');

const router = express.Router();

router.route('/')
    .get(controller.getAll)
    .post(controller.create);

router.route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);


module.exports = router;