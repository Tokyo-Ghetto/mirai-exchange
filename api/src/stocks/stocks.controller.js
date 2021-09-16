import finnhub from "finnhub";
import fetch from "node-fetch";

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c4nlnrqad3ie88npdba0"; // Replace this

const finnhubClient = new finnhub.DefaultApi();

export const getStocksController = (req, res) => {
  finnhubClient.stockSymbols("US", { mic: "XNAS" }, (error, data, response) => {
    res.send(data);
  });
};

export const getStockInfoController = async (req, res) => {
  let stockInfo = [];

  const quoteURL = `https://finnhub.io/api/v1/quote?symbol=${req.params.symbol}&token=${api_key.apiKey}`;
  const profileURL = `https://finnhub.io/api/v1/stock/profile2?symbol=${req.params.symbol}&token=${api_key.apiKey}`;

  const quote = await (await fetch(quoteURL)).json();
  const profile = await (await fetch(profileURL)).json();

  stockInfo.push(quote, profile)


  res.send(stockInfo)
}; 

export const getStockPageController = async (req, res) => {
  let stockInfo = [];

  const quoteURL = `https://finnhub.io/api/v1/quote?symbol=${req.params.symbol}&token=${api_key.apiKey}`;
  const profileURL = `https://finnhub.io/api/v1/stock/profile2?symbol=${req.params.symbol}&token=${api_key.apiKey}`;
  const financialsURL = `https://finnhub.io/api/v1/stock/metric?symbol=${req.params.symbol}&metric=price&token=${api_key.apiKey}`

  const quote = await (await fetch(quoteURL)).json();
  const profile = await (await fetch(profileURL)).json();
  const financials = await (await fetch(financialsURL)).json();

  stockInfo.push(quote, profile, financials)

  res.send(stockInfo)

}

export const getStockCandles = async (req, res) => {
  let stockInfo = [];

  const currentTime = parseInt(new String(Date.now()).substring(0,10)) ;
  console.log(currentTime)
  const yearAgo = currentTime - 28242044;
  console.log(yearAgo)

  const candlesURL = `https://finnhub.io/api/v1/stock/candle?symbol=${req.params.symbol}&resolution=${req.params.time}&from=${yearAgo}&to=${currentTime}&token=c4nlnrqad3ie88npdba0`;

  const candles = await (await fetch(candlesURL)).json();

  stockInfo.push(candles)

  res.send(stockInfo)
}; 