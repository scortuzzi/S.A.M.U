var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

// cadastra a ficha quando o usuário clicar em FINALIZAR na criação de personagem,
// essa rota pega todos os dados necessários para a ficha e coloca dentro do banco
// na tabela ficha
router.post("/cadastrarFicha", function (req, res) {
    personagemController.cadastrarFicha(req, res);
})

router.get("/listar/:idUsuario", function (req, res) {
    personagemController.listar(req, res);
});

module.exports = router;