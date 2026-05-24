    var DashModel = require('../models/DashModel')


        function listarPontuacao(req, res) {
            DashModel.pontuacao_bandas()
                .then(function(resultado) {
                    res.status(200).json(resultado)
                })
                .catch(function(erro) {
                    console.log(erro)
                    res.status(500).send('Erro ao listar pontuações')
                })
        }

        function tentativas(req, res) {
            DashModel.tentativas()
                .then(function(resultado) {
                    res.status(200).json(resultado)
                })
                .catch(function(erro) {
                    console.log(erro)
                    res.status(500).send('Erro ao buscar tentativas')
                })
        }

        function somakpi(req, res) {
            DashModel.somakpi()
                .then(function(resultado) {
                    res.status(200).json(resultado)
                })
                .catch(function(erro) {
                    console.log(erro)
                    res.status(500).send('Erro ao calcular KPI')
                })
        }

        function partidaskpi(req, res) {
            DashModel.partidaskpi()
                .then(function(resultado) {
                    res.status(200).json(resultado)
                })
                .catch(function(erro) {
                    console.log(erro)
                    res.status(500).send('Erro ao buscar KPI de partidas')
                })
        }


        function kpiusuario(req,res) {
            var idUsuario = req.query.id;

            DashModel.kpiusuario(idUsuario)
            .then(function(resultado){
            res.status(200).json(resultado)

            }).catch(function(erro) {
                console.log(erro)
                res.status(500).send('Erro ao buscar KPI do usuário')
            })
        }


        function partidasusuario(req, res) {
            var idUsuario = req.query.id;

            DashModel.partidasusuario(idUsuario)
            .then(function(resultado){
                res.status(200).json(resultado)
            }).catch(function (erro) {
                console.log(erro)
                res.status(500).send('Erro ao buscar a KPI das partidas do usuario')
            })
        }




    module.exports = {listarPontuacao, partidaskpi, partidasusuario, kpiusuario, tentativas, somakpi};