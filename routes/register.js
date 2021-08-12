var express = require('express');
var router = express.Router();

const controller = require("../controller/registerController");

/* GET home page. */
router.get('/',controller.register);
router.post('/',controller.Processregister);


module.exports = router;
