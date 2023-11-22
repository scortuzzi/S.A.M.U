var express = require("express");
var router = express.Router();

var periciaController = require("../controllers/periciaController");

router.post("/cadastrar", function (req, res) {
    periciaController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    periciaController.listar(req, res);
});

module.exports = router;

