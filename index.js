import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { auth } from "./src/routes/index.js";
import { dbConect } from "./src/db/dbConfig.js";

//Habilitar VARIABLESDE ENTORNO
dotenv.config(); 
const PORT = process.env.PORT;

//Crear el SERVER
const app = express();

//Conectar a base de datos
dbConect();

//MIDDLEWARES

    // Habilitar CORS
app.use(cors());

    // Lectura y parseo del body
app.use( express.json() );
    // Carpate publica
app.use( express.static('src/public') );

//RUTAS
app.use('/api/auth', auth)


app.listen(PORT, () => {
    console.log('Server on PORT ' + PORT);
});