express = require('express');
const controller = require('../controllers/loginController');

const router = express.Router();

// http://127.0.0.1/api/v1/login/
router.route('/')
    .post(controller.login);


module.exports = router;

