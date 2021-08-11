var express = require('express');
var router = express.Router();

const controller = require("../controller/registerController");

/* GET home page. */
router.get('/register',controller.register);
router.post('/register',controller.Processregister);


module.exports = router;
