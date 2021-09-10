import finnhub from "finnhub";

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c4nlnrqad3ie88npdba0"; // Replace this

const finnhubClient = new finnhub.DefaultApi();

// OLD CTRL
// export const testController = (req, res) => {
//   let stockInfo = [];
//   let stockName = "NVDA";
//   let stockList = ["TSLA", "MSFT", "BABA", "AMD", "NVDA"]
//   finnhubClient.quote(stockName, (error, data, response) => {
//     stockInfo.push(data);
//   });

//   finnhubClient.companyProfile2(
//     { symbol: stockName },
//     (error, data, response) => {
//       stockInfo.push(data);
//       res.send(stockInfo);
//     }
//   );
// };

export const getStocksController = (req, res) => {
  finnhubClient.stockSymbols("US", {'mic': 'XNAS'}, (error, data, response) => {
    res.send(data);
  });
};

export const getStockInfoController = (req, res) => {
  let stockInfo = [];

  finnhubClient.quote(req.params.symbol, (error, data, response) => {
    stockInfo.push(data);
  });

  finnhubClient.companyProfile2(
    { symbol: req.params.symbol },
    (error, data, response) => {
      stockInfo.push(data);
      res.send(stockInfo);
    }
  );
};
