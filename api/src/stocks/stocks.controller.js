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
