var express = require('express');
var router = express.Router();
let students = require('../BerlinData.json')
const cors = require('cors')


/* GET home page. */
router.get('/students', function(req, res, next) {
  res.json(students);
});

module.exports = router;