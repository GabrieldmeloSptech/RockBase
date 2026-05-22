var express = require("express");
var router = express.Router();


var dashController = require("../controllers/dashController")


router.get("/pontuacao", function (req, res) {
    dashController.listarPontuacao(req, res);
});

router.get("/tentativas", function (req, res) {
    dashController.tentativas(req, res);
});


router.get("/somakpi", function (req,res){

    dashController.somakpi(req,res)
});

router.get("/partidaskpi", function (req,res){

    dashController.partidaskpi(req,res)
});


router.get("/kpiusuario", function(req,res){

    dashController.kpiusuario(req,res)
})

router.get("/partidasusuario", function(req,res){

    dashController.partidasusuario(req,res)
})

module.exports = router;
