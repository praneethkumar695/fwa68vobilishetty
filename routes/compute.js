var express = require('express');
var router = express.Router();
var randomNumber;
var acos;
var abs;
var sin;
var sinh;

/* GET users listing. */
router.get('/', function(req, res, next) {
    randomNumber = Math.round(Math.random());
    let acos = Math.acos(randomNumber);
    let abs = Math.abs(randomNumber);
    let sin = Math.sin(randomNumber);
    let sinh = Math.sinh(randomNumber);
    res.send(`Math.acos() applied to ${randomNumber} is ${acos} <br> 
              Math.abs() applied to ${randomNumber} is ${abs} <br>
              Math.sin() applied to ${randomNumber} is ${sin} <br>
              Math.sinh() applied to ${randomNumber} is ${sinh}`);
});

module.exports = router;