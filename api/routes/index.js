const express = require('express');
const { getStocksController } = require('../stocks/stocks.controller.js');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(getStocksController)
});

module.exports = router;
