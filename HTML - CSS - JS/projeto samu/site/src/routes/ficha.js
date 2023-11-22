var express = require("express");
var router = express.Router();

var fichaController = require("../controllers/fichaController");

router.post("/cadastrar", function (req, res) {
    fichaController.cadastrar(req, res);
})

router.get("/listar/:idFicha", function (req, res) {
    fichaController.listar(req, res);
});

module.exports = router;