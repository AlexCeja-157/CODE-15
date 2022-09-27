const express = require('express') // Importamos la libreria express
const app = express() // Inicializamos la libreria en una constante
const port = 3000
const router = require('./routes') // Importamos las rutas

// Middlewares --> Obtienen los datos de la peticion antes de que lleguen a nuestra funcion

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.json()) // Permitimos comunicacion en formato JSON
app.use(express.urlencoded({extended: false}))

app.use(router) // Utilizamos las rutas

app.listen(port, (error) => {
    error ? console.log(error) : console.log(`Server running on port ${port}!`);
})

