const mongoose = require('mongoose');

//Cria a conexão com o Mongo
mongoose.connect(
    'mongodb://127.0.0.1:27017/auth',
    {
        useNewUrlParser: true      
    }
);

mongoose.connection.on('connected', function () {
    console.log('==> Conexão com o Mongo:  OK');
   });
   mongoose.connection.on('error', function (err) {
    console.log('==> Ocorreu um erro ao conectar com o Mongo: ' + err);
   });
   mongoose.connection.on('disconnected', function () {
    console.log('==> Conexão com Mongo finalizada');
   }); 

mongoose.Promise = global.Promise;
module.exports = mongoose
