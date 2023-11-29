var database = require("../database/config")

function listar() {
    var instrucao = `
        select idFicha from ficha order by idFIcha desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarAtributos(idFicha) {
    var instrucao = `
        select agilidade, inteligencia, vigor, presenca, forca from ficha where idFicha = ${idFicha};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarOrigem(origem) {
    var instrucao = `
    select fkPericia from origem where nomeOrigem = '${origem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar() {
    var instrucao = `
    insert into fichaPericia values 
    ((select idFicha from ficha order by idFIcha desc limit 1), 100, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 101, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 102, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 103, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 104, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 105, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 106, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 107, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 108, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 109, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 110, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 111, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 112, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 113, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 114, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 115, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 116, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 117, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 118, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 119, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 120, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 121, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 122, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 123, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 124, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 125, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 126, 0),
    ((select idFicha from ficha order by idFIcha desc limit 1), 127, 0);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// esta função atualiza o valor da pericia dependendo da origem escolhida
function cadastrarOrigem(origem) {
    var instrucao = `
        update fichaPericia set valor = 5 where fkFicha = (select idFicha from ficha order by idFIcha desc limit 1) and fkPericia = ${origem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    cadastrarOrigem,
    listarAtributos,
    listarOrigem,
    listar
};