CREATE TABLE times (
	id INT PRIMARY KEY AUTO_INCREMENT,
    times VARCHAR (60),
    gols DECIMAL,
    titulos DECIMAL,
    partidas DECIMAL
);

select * from times;

INSERT INTO times (times, gols, titulos, partidas) VALUES
("corinthians", 68, 14, 400),
("São Paulo", 34, 12, 600),
("Palmeiras", 28, 8, 789);

delete from times where id=4;
