/**
 * Este archivo realiza las operaciones con mis datos de usuario, es decir,
 * CRUD de BBDD o filesystem o objetos en memoria (va a ser en este caso)
 */

import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://admin:admin@firstcluster.0o9au.mongodb.net/MiraiExchange?retryWrites=true&w=majority";

// MongoClient.connect(URL, (err, client) => {
//   if (err) {
//     throw err;
//   }
//   console.log(new Date());
//   console.log("Successfully connected.");
//   client
//     .db("MiraiExchange")
//     .collection("users")
//     .find({status: "SUCCESS"})
//     .toArray((err, result) => {
//       if (err) {
//         throw err;
//       }
//       console.log(result);
//       client.close();
//     });
// });

//  MongoClient.connect(URL, (err, client) => {
//     if (err) {
//       throw err;
//     }
//     console.log(new Date());
//     console.log('Successfully connected.');
//     const newPhone = {
//         nombre: 'IX500',
//         marca: 'Xerox',
//         modelo: "Time",
//         RAM: "12GB",
//         HDD: "1TB",
//         precio: '1600'

//     }
//     client.db('FirstDDBB')
//      .collection('products')
//      .insertOne(newPhone)
//      .then(result => {
//         console.log(result);
//         client.close();
//      })
//   });

// MongoClient.connect(URL, (err, client) => {
//     if (err) {
//         throw err;
//     }
//     console.log(new Date());
//     console.log('Successfully connected.');
//     client.db('FirstDDBB')
//         .collection('products')
//         .find({ RAM: '6GB' })
//         .toArray((err, result) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(result);
//             client.close();
//         })

// });

//  MongoClient.connect(URL, (err, client) => {
//     if (err) {
//       throw err;
//     }
//     console.log(new Date());
//     console.log('Successfully connected.');
//     const query = {
//         RAM: "6GB",
//     }
//     const updateObject = {
//         $set:{
//             RAM: '128GB',
//         }
//     }
//     client.db('FirstDDBB')
//      .collection('products')
//      .updateMany(query, updateObject)
//      .then(result => {
//         console.log(result);
//         client.close();
//      })
//   });

//   MongoClient.connect(URL, (err, client) => {
//      if (err) {
//        throw err;
//      }
//      console.log(new Date());
//      console.log('Successfully connected.');
//      const query = {
//          RAM: "12GB",
//      }
//      client.db('FirstDDBB')
//       .collection('products')
//       .deleteMany(query)
//       .then(result => {
//          console.log(result);
//          client.close();
//       })
//    });

/**
 * LISTA DE USUARIOS EN MEMORIA COMO SI FUESE UNA COLLECTION DE
 * BBDD
 */

let userListMongoArray;

MongoClient.connect(URL, (err, client) => {
  if (err) {
    throw err;
  }
  console.log(new Date());
  console.log("Successfully connected.");
  client
    .db("MiraiExchange")
    .collection("users")
    .find({})
    .toArray((err, result) => {
      if (err) {
        throw err;
      }
      userListMongoArray = result;
      console.log("UserListMongoArray created.");
      client.close();
    });
});

/**
 * Esta función va a buscar los datos a
 * mi sistema de persistencia de datos y devuelve la entidad
 * usuario que corresponda con email y password o undefined si no lo encuentra
 */
export const getUserInfoByIdAndPassword = async (userId, password) => {
  const client = await MongoClient.connect(URL);
  console.log("getUserInfoByIdAndPassword connected.");
  const user = await client
    .db("MiraiExchange")
    .collection("users")
    .find({ email: userId, password: password, status: "SUCCESS" })
    .toArray();
  console.log("User Found.");
  console.log(typeof user);
  return user;
  client.close();

};

/**
 * Esta función va a buscar los datos a
 * mi sistema de persistencia de datos y devuelve la entidad
 * usuario que corresponda con email o undefined si no lo encuentra
 */
export const getUserInfoById = (userId) => {
  // MongoClient.connect(URL, (err, client) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log("getUserInfoById connected.");
  //   client
  //     .db("MiraiExchange")
  //     .collection("users")
  //     .find({ email: userId, status: "SUCCESS" }, function (err, result) {
  //       if (err) throw err;
  //       return result;
  //       client.close();
  //     });
  // });

  MongoClient.connect(URL, (err, client) => {
    if (err) {
      throw err;
    }
    console.log("getUserInfoById connected.");
    client
      .db("MiraiExchange")
      .collection("users")
      .find({ email: userId, status: "SUCCESS" })
      .toArray((err, result) => {
        if (err) {
          throw err;
        }
        // console.log(result);
        console.log("Got user info by ID.");
        client.close();
      });
  });
};

/**
 * Crea un usuario en donde se guardan los datos. La password ya vendra codificada
 * Tenemos que poner el status para que se sepa que está pending validation
 */
export const registerUser = (email, password, fullname) => {
  // userList.push({
  //   email,
  //   password,
  //   fullname,
  //   status: "PENDING_EMAIL_VALIDATION",
  // });

  MongoClient.connect(URL, (err, client) => {
    if (err) {
      throw err;
    }
    console.log("registerUser connected.");
    const newUser = {
      fullname: fullname,
      email: email,
      password: password,
      balance: "100000",
      status: "PENDING_EMAIL_VALIDATION",
    };
    client
      .db("MiraiExchange")
      .collection("users")
      .insertOne(newUser)
      .then((result) => {
        console.log("User has been created.");
        client.close();
      });
  });
};

/**
 * Cambia el estado del usuario a SUCCESS
 */
export const updateUserMailVerification = (email) => {
  // console.log(email);
  // const i = userList.findIndex(
  //   (u) => u.email.toLowerCase() === email?.toLowerCase()
  // );
  // userList[i].status = "SUCCESS";

  MongoClient.connect(URL, (err, client) => {
    if (err) {
      throw err;
    }
    console.log("updateUserMailVerification connected.");
    const query = {
      email: email,
    };
    const updateObject = {
      $set: {
        status: "SUCCESS",
      },
    };
    client
      .db("MiraiExchange")
      .collection("users")
      .updateOne(query, updateObject)
      .then((result) => {
        console.log(`${email} has been updated.`);
        client.close();
      });
  });
};
