var insercaoModel = require("../models/insercaoModel");


function listar(req, res) {
    insercaoModel.listar().then(function(resultado){

    
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {

    var idFicha = req.params.idFicha;
    var idPericia = req.params.idPericia;


    insercaoModel.cadastrar(idFicha, idPericia).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}