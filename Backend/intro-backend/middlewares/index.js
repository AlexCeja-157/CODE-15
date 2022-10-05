const jtw = require('jsonwebtoken')

const verifyToken = async(req, res, next)=>{
    const token = req.headers.authorization
    
    try {
        await jtw.verify(token, 'secret');
        next()
    } catch (error) {
        res.send({
            message: 'Token no suministrado'
        })
    }
}

module.exports = {
    verifyToken
}
