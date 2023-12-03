var personagemModel = require("../models/personagemModel");

function listar(req, res) {

    var id = req.params.idUsuario

    personagemModel.listar(id).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrarFicha(req, res) {
    var nomePersonagem = req.body.personagemServer;
    var id = req.body.idServer;
    var imagem = req.body.imagemServer;

    var agi = req.body.agilidadeServer;
    var int = req.body.inteligenciaServer;
    var vig = req.body.vigorServer;
    var pre = req.body.presencaServer;
    var forc = req.body.forcaServer;

    var classe = req.body.classeServer;

    var origem = req.body.origemServer;

    var vida = req.body.vidaServer;
    var san = req.body.sanServer;
    var pe = req.body.peServer;
    
    personagemModel.cadastrarFicha(nomePersonagem, id, agi, int, vig, pre, forc, classe, origem, vida, san, pe, imagem).then(function(resposta){
        res.status(200).send("personagem criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrarFicha
}