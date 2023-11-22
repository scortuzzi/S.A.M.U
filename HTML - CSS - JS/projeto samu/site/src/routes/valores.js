var express = require("express");
var router = express.Router();

var valoresController = require("../controllers/valoresController");

router.post("/alterar/:idFicha/:idPericia/:valor", function (req, res) {
    valoresController.cadastrar(req, res);
})


router.get("/listar/:idFicha", function (req, res) {
    valoresController.listar(req, res);
});

module.exports = router;