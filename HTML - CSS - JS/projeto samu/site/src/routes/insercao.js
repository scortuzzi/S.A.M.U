var express = require("express");
var router = express.Router();

var insercaoController = require("../controllers/insercaoController");


// esta função cadastra os 28 inserts dentro da tabela fichaPericia
router.post("/inserindoPericias/", function (req, res) {
    insercaoController.inserindoPericias(req, res);
})

// após inserirmos todas as perícias em fichaPericia, vamos fazer um update na perícia da origem escolhida
router.post("/periciaOrigem/:origem", function (req, res) {
    insercaoController.periciaOrigem(req, res);
})


router.get("/listar", function (req, res) {
    insercaoController.listar(req, res);
});

router.get("/listarAtributos/:idFicha", function (req, res) {
    insercaoController.listarAtributos(req, res);
});

router.delete("/deletarPericias/:idFicha", function (req, res) {
    console.log('daora')
    insercaoController.deletarPericias(req, res);
});

router.delete("/deletarFicha/:idFicha", function (req, res) {
    console.log('daora')
    insercaoController.deletarFicha(req, res);
});



module.exports = router;
