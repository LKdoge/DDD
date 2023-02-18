const mongoose = require('mongoose');

/* Schema de la base de datos */
const Schema = mongoose.Schema({
    name : {
        type: String,
        require: true,
        lowercase: true,
        minLength: 2,
        maxLength: 30
    },
    lastName :     {
        type :String,
        require: true,
        minLength: 2,
        maxLength: 30
    },
    email :     {
        type :String,
        minLength: 2,
        maxLength: 30
    },
    user:     {
        type :String,
        require: true,
        minLength: 2,
        maxLength: 30
    },
    password: 
    {
        type :String,
        require: true,
        minLength: 2,
        maxLength: 30
    },
    state: Boolean
}, {timeStamps : true})

const UserModel = mongoose.model('Users', Schema);
module.exports = UserModel;