import fs from 'fs';
import fetch from 'node-fetch';

//URL HAS MY TOKEN, NEED TO CHANGE IT
const NASDAQ_URL = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNAS&token=c4nlnrqad3ie88npdba0'
const NASDAQ_DATA_FILE_PATH = '../stocks/nasdaq.json'



export const retrieveAllStocks = () =>{
    return JSON.parse(fs.readFileSync(NASDAQ_DATA_FILE_PATH).toString());
}
