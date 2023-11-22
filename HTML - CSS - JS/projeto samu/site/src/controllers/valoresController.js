var valoresModel = require("../models/valoresModel");


function listar(req, res) {
    
    var idFicha = req.params.idFicha;

    
    valoresModel.listar(idFicha).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


function cadastrar(req, res) {

    var idFicha = req.params.idFicha;
    var idPericia = req.params.idPericia; 
    var valor = req.params.valor;


    valoresModel.cadastrar(idFicha, idPericia, valor).then(function(resposta){
        res.status(200).send("valor inserido com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}