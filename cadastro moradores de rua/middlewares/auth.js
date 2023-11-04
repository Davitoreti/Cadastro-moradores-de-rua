function auth(req,res,next){
    if(req.session.usuario == undefined){
        res.redirect('/login')
    }else{
        next()
    }
}

module.exports = auth