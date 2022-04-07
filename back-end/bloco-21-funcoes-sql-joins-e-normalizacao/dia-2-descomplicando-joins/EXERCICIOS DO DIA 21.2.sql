SELECT * FROM Pixar.BoxOffice;
SELECT B.domestic_sales, B.international_sales, M.title
FROM Pixar.BoxOffice AS B
INNER JOIN Pixar.Movies AS M
ON B.movie_id = M.id; 		#EXERCICIO 1


SELECT M.title 
FROM Pixar.Movies AS M
JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id
WHERE B.domestic_sales < B.international_sales; 	#EXERCICIO 2


SELECT M.title, B.rating 
FROM Pixar.Movies AS M
JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id
ORDER BY B.rating DESC; 	#EXERCICIO 3


SELECT T.name, T.location, M.director, M.title, M.year, M.length_minutes 
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;		#EXERCICIO 4


SELECT T.name, T.location, M.director, M.title, M.year, M.length_minutes 
FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;		#EXERCICIO 5
