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

function inserindoPericias(req, res) {

    insercaoModel.inserindoPericias().then(function(resposta){
        res.status(200).send("perícias inseridas com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function periciaOrigem(req, res) {

    var origem = req.params.origem


    insercaoModel.periciaOrigem(origem).then(function(resposta){
        res.status(200).send("origem atualizada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function deletarPericias(req, res) {

    var ficha = req.params.idFicha


    insercaoModel.deletandoFKpericia(ficha).then(function(resposta){
        res.status(200).send("perícia deletada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function deletarFicha(req, res) {

    var ficha = req.params.idFicha


    insercaoModel.deletarFicha(ficha).then(function(resposta){
        res.status(200).send("ficha deletada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    listar,
    listarAtributos,
    periciaOrigem,
    inserindoPericias,
    deletarPericias,
    deletarFicha
}