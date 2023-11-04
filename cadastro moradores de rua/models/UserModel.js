let db = require('../config/database')

class UserModel {

    async auth() {
        try {
           let result =  await db.select("*").table("usuarios")
            console.log(result);
           return result;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new UserModel();