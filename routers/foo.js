const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send({title: 'foo' });
});

router.post('/hello', function(req, res, next) {
  res.send({title: 'test/hello' });
});

module.exports = router;
