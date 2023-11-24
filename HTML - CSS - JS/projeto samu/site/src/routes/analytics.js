var express = require("express");
var router = express.Router();

var analyticsController = require("../controllers/analyticsController");

router.post("/cadastrar/:nomeUsuario", function (req, res) {
    analyticsController.cadastrar(req, res);
})

router.get("/listarMedia/", function (req, res) {
    analyticsController.listarMedia(req, res);
});

router.get("/listarSoma/", function (req, res) {
    analyticsController.listarSoma(req, res);
});

router.get("/listarUsuarios/", function (req, res) {
    analyticsController.listarUsuarios(req, res);
});

router.get("/listarUsuariosUndefined/", function (req, res) {
    analyticsController.listarUsuariosUndefined(req, res);
});

router.get("/listarFichas/", function (req, res) {
    analyticsController.listarFichas(req, res);
});

router.get("/listar/", function (req, res) {
    analyticsController.listar(req, res);
});

module.exports = router;