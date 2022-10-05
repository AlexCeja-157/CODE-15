const { Router } = require('express')
const router = Router()
const { verifyToken } = require('../middlewares')
const{ crearMascota,
    obtenerTodasMascotas,
    obtenerMascota,
    modificarMascota,
    eliminarMascota,
    loginController,
    registerController } = require('../controllers')
;
//CRUD de Mascotas

router.post('/mascotas', crearMascota)
router.get ('/mascotas', verifyToken, obtenerTodasMascotas)
router.get('/mascotas/:idMascota', obtenerMascota)
router.put('/mascota/:idMascota', modificarMascota)
router.delete('/mascota/:idMascota', eliminarMascota)

//CRUD ejercicio

//router.get('/api',apiController)
//router.get('/api/suma',apiSumaController)
//router.get('/api/usuario/:nombre',apiUsuarioController)
//router.put('api/body',apiBodyController)

router.post('/register', registerController)
router.post('/login', loginController)

module.exports = router
