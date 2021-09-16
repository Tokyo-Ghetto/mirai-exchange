import express from "express";
import { getStocksController, getStockInfoController, getStockPageController, getStockCandles } from "./stocks.controller.js";

const router = express.Router();

router.route('/') // defino una ruta en el router con su path
.get(getStocksController); // asocio al get de ese path un controller

router.route('/:symbol')
.get(getStockInfoController)

router.route('/:symbol/full')
.get(getStockPageController)

router.route('/:symbol/candles/:time')
.get(getStockCandles)



export default router;