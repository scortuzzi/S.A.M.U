var express = require("express");
var router = express.Router();

var analyticsController = require("../controllers/analyticsController");


// função que cadastra um novo acesso toda vez que alguém carrega a página, ela leva com ela seu nome
// registrando como undefined caso o usuário acessando o site não esteja logado
router.post("/cadastrar/:nomeUsuario", function (req, res) {
    analyticsController.cadastrar(req, res);
})

// função que acessa a soma de todos os atributos cadastrados nas fichas de todos os usuários
// usada para saber quais os atributos mais escolhidos pelos usuários
router.get("/listarSoma/", function (req, res) {
    analyticsController.listarSoma(req, res);
});

// função criada para listar quantos acessos houveram no site nos últimos 7 dias,
// ela cria o gráfico de linha vista na página de analytics
router.get("/acessosDias/", function (req, res) {
    analyticsController.acessosDias(req, res);
});

// esta função lista a quantidade de acessos por pessoas que estavam cadastradas no site
router.get("/listarUsuarios/", function (req, res) {
    analyticsController.listarUsuarios(req, res);
});

// em contra partida, esta função lista a quantidade de acessos feitas por usuários
// não logados dentro do site, sem nenhuma conta
router.get("/listarUsuariosUndefined/", function (req, res) {
    analyticsController.listarUsuariosUndefined(req, res);
});

// esta função lista a quantidade de registro dentro da tabela fichas
// ela mostra quantas fichas já foram criadas universalmente dentro do site por todos os usuários
router.get("/listarFichas/", function (req, res) {
    analyticsController.listarFichas(req, res);
});


module.exports = router;