var analyticsModel = require("../models/analyticsModel");


function listar(req, res) {
    analyticsModel.listar().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarMedia(req, res) {
    analyticsModel.listarMedia().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarSoma(req, res) {
    analyticsModel.listarSoma().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarUsuarios(req, res) {
    analyticsModel.listarUsuarios().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

// mostra quantos acessos deslogados houveram
function listarUsuariosUndefined(req, res) {
    analyticsModel.listarUsuariosUndefined().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

// mostra quantas fichas registradas existem no site

function listarFichas(req, res) {
    analyticsModel.listarFichas().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {

    var nomeUsuario = req.params.nomeUsuario;

    analyticsModel.cadastrar(nomeUsuario).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    listarMedia,
    listarSoma,
    listarUsuarios,
    listarUsuariosUndefined,
    listarFichas,
    cadastrar
}