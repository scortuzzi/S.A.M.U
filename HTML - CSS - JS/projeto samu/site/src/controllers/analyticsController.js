var analyticsModel = require("../models/analyticsModel");

// -----------------------------------------------------------------------------------------------------

// função que acessa a soma de todos os atributos cadastrados nas fichas de todos os usuários
// usada para saber quais os atributos mais escolhidos pelos usuários
function listarSoma(req, res) {
    analyticsModel.listarSoma().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
// -----------------------------------------------------------------------------------------------------

// função criada para listar quantos acessos houveram no site nos últimos 7 dias,
// ela cria o gráfico de linha vista na página de analytics
function acessosDias(req, res) {
    analyticsModel.acessosDias().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
// -----------------------------------------------------------------------------------------------------

// esta função lista a quantidade de acessos por pessoas que estavam cadastradas no site
function listarUsuarios(req, res) {
    analyticsModel.listarUsuarios().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
// -----------------------------------------------------------------------------------------------------

// em contra partida, esta função lista a quantidade de acessos feitas por usuários
// não logados dentro do site, sem nenhuma conta
function listarUsuariosUndefined(req, res) {
    analyticsModel.listarUsuariosUndefined().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
// -----------------------------------------------------------------------------------------------------

// esta função lista a quantidade de registro dentro da tabela fichas
// ela mostra quantas fichas já foram criadas universalmente dentro do site por todos os usuários

function listarFichas(req, res) {
    analyticsModel.listarFichas().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
// -----------------------------------------------------------------------------------------------------

// função que cadastra um novo acesso toda vez que alguém carrega a página, ela leva com ela seu nome
// registrando como undefined caso o usuário acessando o site não esteja logado
function cadastrar(req, res) {

    var nomeUsuario = req.params.nomeUsuario;

    analyticsModel.cadastrar(nomeUsuario).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
// -----------------------------------------------------------------------------------------------------

module.exports = {
    listarSoma,
    acessosDias,
    listarUsuarios,
    listarUsuariosUndefined,
    listarFichas,
    cadastrar
}