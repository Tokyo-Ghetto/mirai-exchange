/**
 * Este archivo implementa todos los handlers (controladores) propios de las rutas del usuario
 */
import { getUserInfoById, setUpdatedPortfolio, setUpdatedBalance } from "./user.model.js";

/**
 * Este es el controller (handler) de la request
 * que obtiene la información de un usuario
 */
export const retrieveUserInfoCtrl = async (req, res) => {
  // Obtengo el user info por id,
  // recogiendo el id del email de la request que puso el JWT Middleware
  console.log("Info retrieve started.");
  const userInfo = await getUserInfoById(req.email);
  // borro la passwod para no exponerla en mi API y no enviarsela a los clientes
  delete userInfo[0]["password"];
  // Envio al cliente que realizo la petición los datos del usuario
  console.log(`User info sent: ${JSON.stringify(userInfo)}`);
  res.send(userInfo);
};

export const stockBuyController = async (req, res) => {
    const setBalance = setUpdatedBalance()
    const setPortfolio = setUpdatedPortfolio(req.email, req.body);
    res.send();
};

export const stockSellController = async (req, res) => {
    
};
