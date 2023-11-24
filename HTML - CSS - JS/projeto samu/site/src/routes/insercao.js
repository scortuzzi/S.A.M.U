var express = require("express");
var router = express.Router();

var insercaoController = require("../controllers/insercaoController");

router.post("/cadastrar/:idFicha/:idPericia", function (req, res) {
    insercaoController.cadastrar(req, res);
})


router.get("/listar", function (req, res) {
    insercaoController.listar(req, res);
});

router.get("/listarAtributos/:idFicha", function (req, res) {
    insercaoController.listarAtributos(req, res);
});


module.exports = router;
