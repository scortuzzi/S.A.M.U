var database = require("../database/config")

function listar(id) {
    var instrucao = `
        SELECT 
        
        ficha.idFicha,
        ficha.nomePersonagem,
        usuario.nick,
        ficha.agilidade,
        ficha.inteligencia,
        ficha.vigor,
        ficha.presenca,
        ficha.forca,
        ficha.classe,
        origem.nomeOrigem

        FROM ficha
        join usuario on idUsuario = fkUsuario
        join origem on idOrigem = fkOrigem
        
        where fkUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




function cadastrar(nomePersonagem, id, agi, int, vig, pre, forc, classe, origem) {
    var instrucao = `
    insert into ficha (nomePersonagem, fkUsuario, agilidade, inteligencia, vigor, presenca, forca, classe, fkOrigem) values
    
    ('${nomePersonagem}', '${id}', '${agi}', '${int}', '${vig}', '${pre}', '${forc}', '${classe}', (select origem.idOrigem from origem where nomeOrigem = '${origem}') );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar
};