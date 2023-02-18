const e = require('express');
const mongoose = require('mongoose');

/** Llamar a los modelos **/
require('../../domain/models/user.model')
exports.connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/api_db")
    .then(()=> console.info("Conexion con exito"))
    .catch((error)=> console.error("3312!", e))
}
