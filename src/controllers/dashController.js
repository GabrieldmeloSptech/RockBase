var DashModel = require('../models/DashModel')

var DashController = {

    listarPontuacao: function(req, res) {
        DashModel.pontuacao_bandas()
            .then(function(resultado) {
                res.status(200).json(resultado)
            })
            .catch(function(erro) {
                console.log(erro)
                res.status(500).send('Erro ao listar pontuações')
            })
    },

    tentativas: function(req, res) {
        DashModel.tentativas()
            .then(function(resultado) {
                res.status(200).json(resultado)
            })
            .catch(function(erro) {
                console.log(erro)
                res.status(500).send('Erro ao buscar tentativas')
            })
    },

    somakpi: function(req, res) {
        DashModel.somakpi()
            .then(function(resultado) {
                res.status(200).json(resultado)
            })
            .catch(function(erro) {
                console.log(erro)
                res.status(500).send('Erro ao calcular KPI')
            })
    },

    partidaskpi: function(req, res) {
        DashModel.partidaskpi()
            .then(function(resultado) {
                res.status(200).json(resultado)
            })
            .catch(function(erro) {
                console.log(erro)
                res.status(500).send('Erro ao buscar KPI de partidas')
            })
    }

}

module.exports = DashController