let express = require('express');
let app = express();
let router = express.Router();
const auth = require('../middlewares/auth')

let MainController =  require('../controllers/MainController');

//Página de cadastro
router.get('/login', MainController.login);
router.get('/registrar', MainController.registrar);
router.get('/home', auth, MainController.home);
router.get('/auth', MainController.auth)

module.exports = router;