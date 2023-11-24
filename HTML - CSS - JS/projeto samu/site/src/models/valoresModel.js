var database = require("../database/config")

function listar(idFicha) {
    var instrucao = `
        SELECT * FROM fichaPericia where fkFicha = ${idFicha-1};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idFicha, idPericia, valor) {
    var instrucao = `

        UPDATE fichaPericia set valor = ${valor} where fkFicha = ${idFicha-1} and fkPericia = ${idPericia};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarHP(idFicha, idStatus, valor) {
    var instrucao = `

        UPDATE ficha set ${idStatus} = ${valor} where idFicha = ${idFicha};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    cadastrarHP,
    listar
};