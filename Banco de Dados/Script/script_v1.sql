create database pinguim;
use pinguim;

create table usuario(
idUsuario int primary key auto_increment,
Nickname varchar(45),
Email varchar(45),
Senha varchar(45)
);

create table quiz(
idQuiz int primary key auto_increment,
titulo varchar(45),
descricao varchar(100)
);

create table votacao(
idVotacao int primary key auto_increment,
titulo varchar(45),
descricao varchar(100)
);

create table resultado(
idVotacao int,
idUsuario int,
primary key (idVotacao, idUsuario),
ganhador varchar(45),
qtd_votos int
);

create table resultado_quiz(
idUsuario int,
idQuiz int,
pontuacao varchar(45)
);

create table pergunta(
idPergunta int primary key,
descricao varchar(100),
FK_quiz int,
foreign key (FK_quiz) references quiz (idQuiz)
);

create table resposta(
idResposta int,
idPergunta int,
primary key (idResposta, idPergunta),
opcao char(1),
descricao varchar(100),
validacao TINYINT
);

create table mensagem(
idMensagem int,
idUsuario int,
primary key (idMensagem, idUsuario),
mensagem varchar(140),
dt_mensagem datetime default current_timestamp 
);