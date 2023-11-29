var express = require("express");
var router = express.Router();

var insercaoController = require("../controllers/insercaoController");

router.post("/cadastrar/", function (req, res) {
    insercaoController.cadastrar(req, res);
})

router.post("/cadastrarOrigem/:origem/:ficha", function (req, res) {
    insercaoController.cadastrarOrigem(req, res);
})



router.get("/listar", function (req, res) {
    insercaoController.listar(req, res);
});

router.get("/listarAtributos/:idFicha", function (req, res) {
    insercaoController.listarAtributos(req, res);
});

router.get("/listarOrigem/:origem", function (req, res) {
    insercaoController.listarOrigem(req, res);
});


module.exports = router;
