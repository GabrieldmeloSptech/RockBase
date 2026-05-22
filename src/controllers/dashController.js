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
    },


    kpiusuario: function(req,res) {
        var idUsuario = req.query.id;

        DashModel.kpiusuario(idUsuario)
        .then(function(resultado){
           res.status(200).json(resultado)

        }).catch(function(erro) {
            console.log(erro)
            res.status(500).send('Erro ao buscar KPI do usuário')
        })
    },


    partidasusuario: function (req, res) {
        var idUsuario = req.query.id;

        DashModel.partidasusuario(idUsuario)
        .then(function(resultado){
            res.status(200).json(resultado)
        }).catch(function (erro) {
            console.log(erro)
            res.status(500).send('Erro ao buscar a KPI das partidas do usuario')
        })
    }


}

module.exports = DashController