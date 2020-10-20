create database filas;

use filas;

drop table if exists usuario;
    drop table if exists agendamento;

    create table usuario(
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    nome varchar(30) not null,
    email varchar(30) not null,
    matricula varchar(15) not null
);

create table agendamento(
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        id_usuario INT(11) not null,
        local varchar(50) not null,
        servico varchar(250) not null,
        data timestamp not null,

        constraint id_usuario_fk foreign key (id_usuario) references usuario(id)
);