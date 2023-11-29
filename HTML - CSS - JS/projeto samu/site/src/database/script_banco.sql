create database samu;
use samu;
drop database samu;

create table usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(85),
emailUsuario varchar(255) unique,
nick varchar(45),
telefone varchar(11),
senha varchar(45)
) auto_increment = 100;

create table pericia (
idPericia int primary key,
nomePericia varchar(45),
descricaoPericia varchar(255)
);

insert into pericia values 
(100, 'acrobacia', 'Você consegue fazer proezas acrobáticas.'),
(101, 'adestramento', 'Você sabe lidar com animais.'),
(102, 'artes', 'Você sabe se expressar com diversas formas de arte, como música, dança, escrita, pintura, atuação e outras.'),
(103, 'atletismo', 'Você pode realizar façanhas atléticas.'),
(104, 'atualidades', 'Você é um conhecedor de assuntos gerais'),
(105, 'ciências', 'Você estudou diversos campos científicos, como matemática, física, química e biologia'),
(106, 'crime', 'Você sabe exercer atividades ilícitas.'),
(107, 'diplomacia', 'Você convence pessoas com lábia e argumentação.'),
(108, 'enganação', 'Você manipula pessoas com blefes e trapaças.'),
(109, 'fortitude', 'Você usa esta perícia para testes de resistência contra efeitos que exigem vitalidade'),
(110, 'furtividade', 'Você sabe ser discreto e sorrateiro.'),
(111, 'iniciativa', 'Esta perícia determina sua velocidade de reação.'),
(112, 'intimidação', 'Você pode assustar ou coagir outras pessoas. Todos os usos de Intimidação são efeitos de medo.'),
(113, 'intuição', 'Esta perícia mede sua empatia e “sexto sentido”.'),
(114, 'investigação', 'Você sabe como descobrir pistas e informações.'),
(115, 'luta', 'Você usa Luta para fazer ataques corpo a corpo. A DT é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada.'),
(116, 'medicina', 'Você sabe tratar ferimentos, doenças e venenos.'),
(117, 'ocultismo', 'Você estudou o Paranormal.'),
(118, 'percepção', 'Você nota coisas usando os sentidos.'),
(119, 'pilotagem', 'Você sabe operar veículos terrestres e aquáticos'),
(120, 'pontaria', 'Você usa Pontaria para fazer ataques à distância. A DT é a Defesa do alvo. Se você acertar, causa dano de acordo com a arma utilizada.'),
(121, 'profissão', 'Você sabe exercer uma profissão específica'),
(122, 'reflexos', 'Você usa esta perícia para testes de resistência contra efeitos que exigem reação rápida'),
(123, 'religião', 'Você possui conhecimento sobre teologia e as diversas religiões do mundo.'),
(124, 'sobrevivência', 'Você pode se guiar em regiões selvagens e evitar perigos da natureza.'),
(125, 'tática', 'Você recebeu educação militar.'),
(126, 'tecnologia', 'Você possui conhecimentos avançados de eletrônica e informática.'),
(127, 'vontade', 'Você usa esta perícia para testes de resistência contra efeitos que exigem determinação');

create table origem (
idOrigem int primary key,
nomeOrigem varchar(45),
descricaoOrigem text,
fkPericia int,
constraint FKPo foreign key (fkPericia) references pericia(idPericia)
);

insert into origem values 
(1, 'Acadêmico', 'Você era um pesquisador ou professor universitário. De forma proposital 
ou não, seus estudos tocaram em assuntos misteriosos e chamaram a 
atenção da Ordo Realitas.', 105),

(2, 'Agente da saúde', 'Você era um profissional da saúde, como um enfermeiro, farmacêutico, médico, 
psicólogo ou socorrista, treinado no atendimento e cuidado de pessoas. Você pode 
ter sido surpreendido por um evento paranormal durante o trabalho ou mesmo 
cuidado de um agente da Ordem em uma emergência, que ficou surpreso com 
o quão bem você lidou com a situação.', 116),

(3, 'Amnésico', 'Você perdeu a maior parte da memória. Sabe apenas o próprio nome, ou 
nem isso. Sua amnésia pode ser resultado de um trauma paranormal ou 
mesmo de um ritual. Talvez você tenha sido vítima de cultistas? Talvez 
você tenha sido um cultista? Seja como for, hoje a Ordem é a 
única família que conhece. Quem sabe, cumprindo missões, 
você descubra algo sobre seu passado.', null),

(4, 'Artista', 'Você era um ator, músico, escritor, dançarino, influenciador… 
Seu trabalho pode ter sido inspirado por uma experiência 
paranormal do passado e o que o público acha que é pura 
criatividade, a Ordem sabe que tem um lado mais sombrio.', 102),

(5, 'Atleta', 'Você competia em um esporte individual ou coletivo, como natação 
ou futebol. Seu desempenho pode ser fruto de uma influência paranormal que nem mesmo você conhecia ou você pode ter se envolvido em 
algum evento relacionado ao Outro Lado em uma de suas competições.', 103);


create table ficha (
idFicha int primary key auto_increment,
vida int,
sanidade int,
pe int,
agilidade int,
inteligencia int,
vigor int,
presenca int,
forca int,
nomePersonagem varchar(45),
descricaoPersonagem varchar(255),
fkUsuario int,
fkOrigem int,
constraint FKUf foreign key (fkUsuario) references usuario(idUsuario),
constraint FKOf foreign key (fkOrigem) references origem(idOrigem),
classe varchar(45)
) auto_increment = 1000;

create table fichaPericia (
fkFicha int,
fkPericia int,
valor int,
constraint primary key (fkFicha, fkPericia),
constraint FKFf foreign key (fkFicha) references ficha(idFicha),
constraint FKPf foreign key (fkPericia) references pericia(idPericia)
);

create table analytics (
idAnalytics int primary key auto_increment,
nomeUsuario varchar(45),
dataHora datetime default current_timestamp
) auto_increment = 10000;



-- testes

select * from analytics;

select * from count(analytics) where datahora between '2023-11-25 23:33:30' and '2023-11-25 23:33:59';


select * from ficha;

select nomeOrigem from origem where idOrigem = 1;

select idOrigem from origem where nomeOrigem = 'Atleta';

select * from origem;
select * from fichaPericia;

select * from ficha;

 select fkPericia from origem where nomeOrigem = 'Agente da saúde';
 
 select * from analytics;
 
 select count(nomeUsuario) from analytics where nomeUsuario != 'undefined';
 
 
 select fkPericia from origem where nomeOrigem = 'Agente da saúde';
 select

update fichaPericia set valor = 5 where fkFicha = 1001 and fkPericia = 1004;




select * from origem;


    
