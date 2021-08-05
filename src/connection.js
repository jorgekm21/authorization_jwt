const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb://localhost:27017/jwtdb')
.then((db) => {
    console.log('Conexion exitosa')
}) .catch((err) => {
    console.log('Ocurrio un error: ' + err)
})

module.exports = connection