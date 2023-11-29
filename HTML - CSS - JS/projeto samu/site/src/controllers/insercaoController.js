var insercaoModel = require("../models/insercaoModel");


function listar(req, res) {
    insercaoModel.listar().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


function listarAtributos(req, res) {
    
    var idFicha = req.params.fichaServer;
    
    insercaoModel.listarAtributos(idFicha).then(function(resultado){
    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarOrigem(req, res) {

    var origem = req.params.origem
    
    
    insercaoModel.listarOrigem(origem).then(function(resultado){
    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {

    insercaoModel.cadastrar().then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrarOrigem(req, res) {

    var origem = req.params.origem


    insercaoModel.cadastrarOrigem(origem).then(function(resposta){
        res.status(200).send("origem atualizada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    listar,
    listarAtributos,
    listarOrigem,
    cadastrarOrigem,
    cadastrar
}