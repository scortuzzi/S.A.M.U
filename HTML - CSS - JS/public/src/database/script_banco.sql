create database samu;
use samu;
drop database samu;

create table usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(85),
emailUsuario varchar(255),
nick varchar(45),
telefone double,
senha varchar(45),
senhaCon varchar(45)
) auto_increment = 100;


create table origem (
idOrigem int primary key,
nomeOrigem varchar(45),
descricaoOrigem text
);

insert into origem values 
(1, 'Acadêmico', 'Você era um pesquisador ou professor universitário. De forma proposital 
ou não, seus estudos tocaram em assuntos misteriosos e chamaram a 
atenção da Ordo Realitas.'),

(2, 'Agente da saúde', 'Você era um profissional da saúde, como um enfermeiro, farmacêutico, médico, 
psicólogo ou socorrista, treinado no atendimento e cuidado de pessoas. Você pode 
ter sido surpreendido por um evento paranormal durante o trabalho ou mesmo 
cuidado de um agente da Ordem em uma emergência, que ficou surpreso com 
o quão bem você lidou com a situação.'),

(3, 'Amnésico', 'Você perdeu a maior parte da memória. Sabe apenas o próprio nome, ou 
nem isso. Sua amnésia pode ser resultado de um trauma paranormal ou 
mesmo de um ritual. Talvez você tenha sido vítima de cultistas? Talvez 
você tenha sido um cultista? Seja como for, hoje a Ordem é a 
única família que conhece. Quem sabe, cumprindo missões, 
você descubra algo sobre seu passado.'),

(4, 'Artista', 'Você era um ator, músico, escritor, dançarino, influenciador… 
Seu trabalho pode ter sido inspirado por uma experiência 
paranormal do passado e o que o público acha que é pura 
criatividade, a Ordem sabe que tem um lado mais sombrio.'),

(5, 'Atleta', 'Você competia em um esporte individual ou coletivo, como natação 
ou futebol. Seu desempenho pode ser fruto de uma influência paranormal que nem mesmo você conhecia ou você pode ter se envolvido em 
algum evento relacionado ao Outro Lado em uma de suas competições.');

select * from origem;

create table ficha (
idFicha int primary key auto_increment,
agil int,
inte int,
vigo int,
pres int,
forc int,
nomePersonagem varchar(45),
descricaoPersonagem varchar(255),
fkUsuario int,
fkOrigem int,
constraint FKUf foreign key (fkUsuario) references usuario(idUsuario),
constraint FKOf foreign key (fkOrigem) references origem(idOrigem)
) auto_increment = 1000;




