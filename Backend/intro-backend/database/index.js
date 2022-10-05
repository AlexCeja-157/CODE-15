const { Pool } = require("pg")

const connect = new Pool ({
    host:"localhost",
    user:"postgres",
    password:"Al3xC3j4",
    database:"intro-backend",
    port:"5432"

})


module.exports = connect