var database = require("../database/config")

function listar(id) {
    var instrucao = `
    select 
    ficha.idFicha,
    ficha.vida,
    ficha.sanidade,
    ficha.pe,
    ficha.agilidade,
    ficha.inteligencia,
    ficha.vigor,
    ficha.presenca,
    ficha.forca,
    ficha.nomePersonagem,
    ficha.fkUsuario,
    ficha.fkOrigem,
    ficha.classe,

    ficha.imagemPersonagem
    

    from ficha
    join usuario on fkUsuario = idUsuario
    where fkUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




function cadastrar(nomePersonagem, id, agi, int, vig, pre, forc, classe, origem, vida, san, pe, imagem) {
    var instrucao = `
    insert into ficha (nomePersonagem, fkUsuario, agilidade, inteligencia, vigor, presenca, forca, classe, fkOrigem, vida, sanidade, pe, imagemPersonagem) values
    
    ('${nomePersonagem}', '${id}', '${agi}', '${int}', '${vig}', '${pre}', '${forc}', '${classe}',(select origem.idOrigem from origem where nomeOrigem = '${origem}'),  ${vida}, ${san}, ${pe}, '${imagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar
};