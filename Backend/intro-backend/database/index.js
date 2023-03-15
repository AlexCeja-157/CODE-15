const { Pool } = require("pg")

//const connect = new Pool ({
//    host:"localhost",
//    user:"postgres",
//    password:"Al3xC3j4",
//    database:"intro-backend",
//    port:"5432"

//})

const connect = new Pool ({
    host:"babar.db.elephantsql.com",
    user:"qfimoyxm",
    password:"o9M5y_Y5X0HgxBPIiPVrxumpH3I9_STZ",
    database:"qfimoyxm",
    port:"5432"

})


module.exports = connect