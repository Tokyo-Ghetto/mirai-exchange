/**
 * Define el router de usuarios y asocia a cada una de las rutas un 
 * controller
 */
const express = require('express'); // importamos express para crear el router
const { retrieveUserInfoCtrl } = require('../user/user.controller.js'); // importo los controllers del usuario
// importo el middleware que valida los token JWT
const { validateJWTAuth } = requre('../auth/auth.middleware.js');

const router = express.Router(); // Creamos el router desde express

// registro para todo mi router como  router privado y autorizado
router.use(validateJWTAuth);
router.route('/') // defino una ruta en el router con su path
    .get(retrieveUserInfoCtrl); // asocio al get de ese path un controller

// exportamos el router para que la app lo pueda consumir
module.exports = router;