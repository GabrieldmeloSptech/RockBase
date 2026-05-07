var PontuacaoModel = require('../models/PontuacaoModel')

var PontuacaoController = {

    salvar: function(req, res) {
        var idUsuario = req.body.idUsuario
        var banda     = req.body.banda
        var pontos    = req.body.pontos

        if (!idUsuario || !banda || pontos === undefined) {
            return res.status(400).send('Dados incompletos')
        }

        PontuacaoModel.inserirPontuacao(idUsuario, banda, pontos)
            .then(function() {
                res.status(201).send('Pontuação salva com sucesso!')
            })
            .catch(function(erro) {
                console.log(erro)
                res.status(500).send('Erro ao salvar pontuação')
            })
    },

    listar: function(req, res) {
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

}

module.exports = PontuacaoController