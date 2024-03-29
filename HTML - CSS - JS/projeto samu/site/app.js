process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");

// as coisas que eu criei abaixo:

var personagemRouter = require("./src/routes/personagem")
var fichaRouter = require("./src/routes/ficha");
var periciaRouter = require("./src/routes/pericia");
var valoresRouter = require("./src/routes/valores");
var insercaoRouter = require("./src/routes/insercao");
var analyticsRouter = require("./src/routes/analytics");

// ---------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);

// as que eu criei abaixo:

app.use("/personagem", personagemRouter);
app.use("/ficha", fichaRouter);
app.use("/pericia", periciaRouter);
app.use("/valores", valoresRouter);
app.use("/insercao", insercaoRouter);
app.use("/analytics", analyticsRouter);

// ---------------------------

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
