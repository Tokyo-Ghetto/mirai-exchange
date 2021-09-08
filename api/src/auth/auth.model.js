/**
 * MODELO DE AUTENTICACION Y AUTORIZACION
 */

/**
 * COLLECTION EMAIL_VERIFICATION ({token, email})
 */

import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://admin:admin@firstcluster.0o9au.mongodb.net/MiraiExchange?retryWrites=true&w=majority";

/**
 * Obtener el email por token
 */
export const retrieveEmailByToken = (token) => {
  // console.log(EMAIL_VERIFICATION);
  // return EMAIL_VERIFICATION.find((e) => e.token === token)?.email; // si no existe devolvemos undefined


  // OLD
  // MongoClient.connect(URL, (err, client) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log("retrieveEmailByToken connected.");
  //   client
  //     .db("MiraiExchange")
  //     .collection("EMAIL_VERIFICATION")
  //     .find({ token: token }, function (err, result) {
  //       if (err) throw err;
  //       return result.email;
  //       client.close();
  //     });
  // });


  MongoClient.connect(URL, (err, client) => {
    if (err) {
      throw err;
    }
    console.log("retrieveEmailByToken connected.");
    client
      .db("MiraiExchange")
      .collection("EMAIL_VERIFICATION")
      .find({ token: token })
      .toArray((err, result) => {
        if (err) {
            throw err;
        }
        // console.log(result);
        console.log('Email retrieved by token.');
        client.close();
  });
});
};

/**
 * registrar token asociado al email
 */
export const registerToken = (token, email) => {
  // EMAIL_VERIFICATION.push({
  //   token,
  //   email,
  // });

  MongoClient.connect(URL, (err, client) => {
    if (err) {
      throw err;
    }
    console.log("registerToken connected.");
    const newToken = {
      email: email,
      token: token,
    };
    client
      .db("MiraiExchange")
      .collection("EMAIL_VERIFICATION")
      .insertOne(newToken)
      .then((result) => {
        console.log("Token has been created.");
        client.close();
      });
  });
};

/**
 * Borramos el token de nuestro modelo
 */
export const deleteToken = (token) => {
  // const i = EMAIL_VERIFICATION.findIndex((e) => e.token === token);
  // if (i >= 0) EMAIL_VERIFICATION.splice(i, 1); // solo borramos si existe

  MongoClient.connect(URL, (err, client) => {
    if (err) {
      throw err;
    }
    console.log("deleteToken connected.");
    const query = {
      token: token,
    };
    client
      .db("MiraiExchange")
      .collection("EMAIL_VERIFICATION")
      .deleteOne(query)
      .then((result) => {
        console.log('Token deleted.');
        client.close();
      });
  });
};

/**
 * intentamos obtener el token si es valido devolvemos el email y borramos el token
 */
export const validateToken = (token) => {
  const email = retrieveEmailByToken(token);
  if (email) deleteToken(token);
  console.log("email", email);
  // console.log('Token validated.');
  return email;
};
