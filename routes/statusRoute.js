const express = require('express');
const statusController = require('../controllers/statusController');

const router = express.Router();

router.route('/')
    .get(statusController.getAll)
    .post(statusController.create);

router.route('/:nombre')
    .get(statusController.get)
    .put(statusController.update)
    .delete(statusController.delete)

module.exports = router;