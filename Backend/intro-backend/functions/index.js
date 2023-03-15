const express = require('express') // Importamos la libreria express
const app = express() // Inicializamos la libreria en una constante
const port = 3000
const router = require('../routes') // Importamos las rutas
const serverless = require('serverless-http')
const cors = require('cors')

// Middlewares --> Obtienen los datos de la peticion antes de que lleguen a nuestra funcion

app.use(express.json()) // Permitimos comunicacion en formato JSON
app.use(express.urlencoded({extended: false}))

app.use(cors())
app.use(router) // Utilizamos las rutas

//Levantamos el servidor con el metodo listen de express
app.listen(port, (error) => {
    error ? console.log(error) : console.log(`Server running on port ${port}!`);
})

module.exports.handler = serverless(app)