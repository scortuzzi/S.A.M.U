var database = require("../database/config")

function listar() {
    var instrucao = `
    select * from analytics;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarMedia() {
    var instrucao = `
    select 
	    round(avg(agilidade), 0) agilidade,
        round(avg(inteligencia), 0) inteligencia,
        round(avg(vigor), 0) vigor,
        round(avg(presenca), 0) presenca,
        round(avg(forca), 0) forca
    from ficha;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarSoma() {
    var instrucao = `
    select 
	    sum(agilidade) agilidadaSoma,
        sum(inteligencia) intelectoSoma,
        sum(presenca) presencaSoma,
        sum(vigor) vigorSoma,
        sum(forca) forcaSoma
    from ficha;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsuarios() {
    var instrucao = `
    select count(distinct nomeUsuario) quantos from analytics;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// para mostrar quantos acessos deslogados existem
function listarUsuariosUndefined() {
    var instrucao = `
    select count(nomeUsuario) as deslogados from analytics where nomeUsuario = 'undefined';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// para mostrar quantas fichas tem registradas
function listarFichas() {
    var instrucao = `
    select count(*) as quantasFichas from ficha;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nomeUsuario) {
    var instrucao = `
      insert into analytics (nomeUsuario) values
      ('${nomeUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listarMedia,
    listarSoma,
    listarUsuarios,
    listarUsuariosUndefined,
    listarFichas,
    listar
};

// peter, a gente precisa saber quantos usuarios entraram no site por dia, pra isso a gente
// precisa fazer um select onde o where = dia atual, pra pegar o dia atual a gente precisa
// trazer como parametro, o dia do computador, que é pego com uma função especifica do javascript