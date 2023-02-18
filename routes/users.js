var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST */
router.post('/', (req, res) => {
  res.send('Registrar')
})

/* PUT */
router.put('/', (req, res) => {
  res.send(' PUT ')
})

/* DELETE */
router.delete('/', (req, res) => {
  res.send('Delete')
})

module.exports = router;
