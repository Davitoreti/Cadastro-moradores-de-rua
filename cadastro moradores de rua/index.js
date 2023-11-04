const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const session = require('express-session');
const router = require('./routes/routes');

//Sessões
app.use(session({
    secret: "1234",
    resave: false,
    saveUninitialized: false
}))

//responsavel por renderizar html na tela
app.set('view engine', 'ejs');
//arquivos estáticos
app.use(express.static('public'))

//parse application/x-ww-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, function () {
    console.log('Rodando em https://localhost:3000');
});