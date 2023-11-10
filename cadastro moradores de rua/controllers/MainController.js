let UserModel = require('../models/UserModel')

class MainController{

    async login(req,res){
        let usuarios = await UserModel.auth();
        res.render('login', {usuarios})
    }
    async auth(req,res){
        let usuarios = await UserModel.auth();
        res.send(usuarios)
    }
    
    async registrar(req,res){
        res.send('registrar')
    }

    async home(req,res){
        res.render('index')
    }
}

module.exports = new MainController();