SELECT * FROM Pixar.Movies;
INSERT INTO Pixar.Movies (title, director, `year`, length_minutes) #EXERCICIO 1
VALUES ('Monstros SA', 'Peter Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Peter Docter', 2008, 104);


SELECT * FROM Pixar.BoxOffice;
INSERT INTO Pixar.BoxOffice (rating, domestic_sales, international_sales) #EXERCICIO 2
VALUES (6.8, 450000000, 370000000);
SELECT * FROM Pixar.BoxOffice;


UPDATE Pixar.BoxOffice
SET movie_id = 8
WHERE movie_id = null;


SELECT * FROM Pixar.Movies; #EXERCICIO 3
UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE director = 'John Lasseter';
SELECT * FROM Pixar.Movies;


UPDATE Pixar.Movies 	#EXERCICIO 4
SET title = 'Ratatouille', `year` = 2007
WHERE title = 'ratatui' AND `year` = 2010;
SELECT * FROM Pixar.Movies;


SELECT * FROM Pixar.BoxOffice; 			#EXERCICIO 5
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (9, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000,280000000);
SELECT * FROM Pixar.BoxOffice;

DELETE FROM Pixar.Movies 		#EXERCICIO 6
WHERE title = 'WALL-E';
SELECT * FROM Pixar.Movies;
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`Pixar`.`BoxOffice`, CONSTRAINT `BoxOffice_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
