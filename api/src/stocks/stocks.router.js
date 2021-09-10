import express from "express";
import { getStocksController, getStockInfoController } from "./stocks.controller.js";

const router = express.Router();

router.route('/') // defino una ruta en el router con su path
.get(getStocksController); // asocio al get de ese path un controller

router.route('/:symbol')
.get(getStockInfoController)



export default router;