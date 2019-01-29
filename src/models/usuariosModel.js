const mongoose      = require('../config/db');
const Schema        = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String
    },
    nome:{
        type:String
    }
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
