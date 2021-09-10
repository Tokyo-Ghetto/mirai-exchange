import express from 'express'; // importo express para hacer una app
import cors from 'cors'; // importo el cors para que los navegadores me puedan llamar
import userRouter from './src/user/user.router.js';
import authRouter from './src/auth/auth.router.js';
import stocksRouter from './src/stocks/stocks.router.js'
import cookieParser from 'cookie-parser';



const app = express(); // creo una app

app.use(cors({ origin: '*'})); // librería que implementa el cors en mi backend
app.use(express.json()) // permito al app que formatee el body en JSON
app.use(cookieParser());


// le indico a la app que el path /user va a ser gestionado por userRouter
app.use('/user', userRouter); 
// Le indico a la app que en el path /auth hay un router que lo gestiona
app.use('/auth', authRouter);
// Le indico a la app que el path /stocks sera gestionado por el tradeRouter
app.use('/stocks', stocksRouter);

 // levanto el servidor en el puerto 9000
app.listen(9000, () => console.log('Server Started'))