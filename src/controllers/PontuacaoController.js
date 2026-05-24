var PontuacaoModel = require('../models/PontuacaoModel')



    function salvar(req, res) {
        var idUsuario = req.body.idUsuario
        var banda     = req.body.banda
        var pontos    = req.body.pontos

        PontuacaoModel.inserirPontuacao(idUsuario, banda, pontos)
            .then(function() {
                res.status(201).send('Pontuação salva com sucesso!')
            })
            .catch(function(erro) {
                console.log(erro)
                res.status(500).send('Erro ao salvar pontuação')
            })
    }

     function listar(req, res) {
        var idUsuario = req.params.idUsuario

        PontuacaoModel.listarPorUsuario(idUsuario)
            .then(function(resultado) {
                res.status(200).json(resultado)
            })
            .catch(function(erro) {
                console.log(erro)
                res.status(500).send('Erro ao buscar pontuações')
            })
    }



module.exports = {salvar, listar};