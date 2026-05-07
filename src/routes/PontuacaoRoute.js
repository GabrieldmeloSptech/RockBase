var express    = require('express')
var router     = express.Router()
var controller = require('../controllers/PontuacaoController')

router.post('/salvar',        controller.salvar)
router.get('/listar/:idUsuario', controller.listar)

module.exports = router