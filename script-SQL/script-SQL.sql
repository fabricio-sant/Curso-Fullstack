show databases;

use kgt_bank;

-- Criando uma tabela


create TABLE conta (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  saldo DECIMAL,
  senha VARCHAR(6)
);

-- selecionar a tabela
SELECT * FROM conta;

-- inserindo dados
INSERT INTO conta (nome, saldo, senha)
VALUES ('Doris', 10, '123');

SELECT * FROM conta;

INSERT INTO conta (nome, saldo, senha)
VALUES ('Caio',3000,'321');

INSERT INTO conta (nome, saldo, senha)
VALUES ('Pedro',4000,'1234');

INSERT INTO conta (nome, saldo, senha)
VALUES ('Pepe', 1000, '1234');

SELECT * FROM conta;


-- apagando dados do banco
delete from conta  where id=9;

create  