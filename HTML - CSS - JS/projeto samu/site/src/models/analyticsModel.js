var database = require("../database/config")

// -----------------------------------------------------------------------------------------------------

// função que acessa a soma de todos os atributos cadastrados nas fichas de todos os usuários
// usada para saber quais os atributos mais escolhidos pelos usuários

function listarSoma() {
    var instrucao = `
    select 
	    sum(agilidade) agilidadeSoma,
        sum(inteligencia) intelectoSoma,
        sum(presenca) presencaSoma,
        sum(vigor) vigorSoma,
        sum(forca) forcaSoma
    from ficha;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// -----------------------------------------------------------------------------------------------------

// função criada para listar quantos acessos houveram no site nos últimos 7 dias,
// ela cria o gráfico de linha vista na página de analytics

function acessosDias() {
    var instrucao = `

    select  DATE_FORMAT(datahora, '%d-%m-%Y')as 'data', count(*) as quantos from analytics group by datahora order by datahora desc limit 7;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// -----------------------------------------------------------------------------------------------------

// esta função lista a quantidade de acessos por pessoas que estavam cadastradas no site

function listarUsuarios() {
    var instrucao = `
    select count(nomeUsuario) as quantos from analytics where nomeUsuario != 'undefined';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// -----------------------------------------------------------------------------------------------------

// em contra partida, esta função lista a quantidade de acessos feitas por usuários
// não logados dentro do site, sem nenhuma conta

function listarUsuariosUndefined() {
    var instrucao = `
    select count(nomeUsuario) as deslogados from analytics where nomeUsuario = 'undefined';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// -----------------------------------------------------------------------------------------------------

// esta função lista a quantidade de registro dentro da tabela fichas
// ela mostra quantas fichas já foram criadas universalmente dentro do site por todos os usuários

function listarFichas() {
    var instrucao = `
    select count(*) as quantasFichas from ficha;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// -----------------------------------------------------------------------------------------------------

// função que cadastra um novo acesso toda vez que alguém carrega a página, ela leva com ela seu nome
// registrando como undefined caso o usuário acessando o site não esteja logado

function cadastrar(nomeUsuario) {
    var instrucao = `
      insert into analytics (nomeUsuario, dataHora) values
      ('${nomeUsuario}', curdate());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// -----------------------------------------------------------------------------------------------------

module.exports = {
    cadastrar,
    listarSoma,
    acessosDias,
    listarUsuarios,
    listarUsuariosUndefined,
    listarFichas
};