const express = require('express');
const controlleer = require('../controllers/alumnosController');

const router = express.Router();

router.route('/')
    .get(controlleer.getAll)
    .post(controlleer.create);

router.route('/:nombre')
    .get(controlleer.get)
    .put(controlleer.update)
    .delete(controlleer.delete)

module.exports = router;

