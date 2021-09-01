const finnhub = require('finnhub');
const express = require('express');
const router = express.Router();

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c4nlnrqad3ie88npdba0" // Replace this
const finnhubClient = new finnhub.DefaultApi()

//ROUTER INSTRUCTIONS
let stockPrice = ''

// router.get('/', function(req,res,next) {
//     finnhubClient.quote('CLOV', (error, data, response) => {
//         stockInfo.push(data)
//         res.send(stockInfo[0])
//     });
// })

router.get('/:id', function (req, res, next) {
    finnhubClient.quote('AAPL', (error, data, response) => {
        stockPrice = data
        res.status(200).send((stockPrice.c).toString());
    });


})

//ROUTER INSTRUCTIONS END

module.exports = router;