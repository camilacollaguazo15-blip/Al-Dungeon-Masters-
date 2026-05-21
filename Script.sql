

CREATE DATABASE IF NOT EXISTS PeliculaDB;

USE PeliculaDB;

CREATE TABLE IF NOT EXISTS Generos (
    id_genero int AUTO_INCREMENT PRIMARY KEY,
    nombre_genero varchar(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS Peliculas ( 
    id_pelicula int AUTO_INCREMENT PRIMARY KEY,
    nombre_pelicula varchar(200) NOT NULL,
    descripcion text,
    imdb_rating DECIMAL(3,1),
    id_genero int,
    FOREIGN KEY (id_genero)
    REFERENCES Generos(id_genero)
);

INSERT INTO Generos (id_genero, nombre_genero)
VALUES 
(1,'Accion'),
(2,'Comedia'),
(3,'Drama'),
(4,'Aventura'),
(5,'Terror'); 

INSERT INTO Peliculas (id_pelicula, nombre_pelicula, descripcion, imdb_rating, id_genero) 
VALUES 
(1,'Mad Max: Fury Road','Una persecución implacable en un futuro postapocalíptico con un despliegue visual e imponente.', 8.1, 1),
(2,'The Shawshank Redemption','Una conmovedora historia sobre la esperanza, la paciencia y la amistad dentro de una prisión de máxima seguridad.', 9.3, 3),
(3,'Whiplash','La obsesión de un joven baterista de jazz y la relación destructiva con su despiadado e inflexible profesor.', 8.5, 3),
(4,'Hereditary','Una pesadilla de terror psicológico y sobrenatural sobre los oscuros secretos de una familia tras la muerte de la abuela.', 7.3, 5),
(5,'The Conjuring','Basada en los expedientes reales de los investigadores paranormales Ed y Lorraine Warren enfrentándose a una presencia demoníaca.', 7.5, 5),
(6,'The Thing','Un clásico del terror de ciencia ficción donde un grupo de científicos en la Antártida es acechado por una criatura cambiaformas.', 8.2, 5),
(7,'Raiders of the Lost Ark','La primera e icónica aventura de Indiana Jones en busca del Arca de la Alianza.', 8.4, 4),
(8,'Superbad','Dos amigos de la secundaria intentan conseguir alcohol para una fiesta en una noche desastrosa y llena de risas.', 7.6, 2),
(9,'The Lord of the Rings: The Fellowship of the Ring','El inicio de un viaje épico para destruir un anillo de poder y salvar a la Tierra Media.', 8.9, 4),
(10,'John Wick','Un asesino retirado regresa a la acción para vengar lo único que le quedaba, redefiniendo el cine de acción moderno.', 7.4, 1),
(11,'Die Hard','El clásico de acción por excelencia donde un policía atrapado en un rascacielos se enfrenta a un grupo de terroristas.', 8.2, 1),
(12,'The Grand Budapest Hotel','Una comedia con el estilo visual único de Wes Anderson, llena de personajes excéntricos y enredos.', 8.1, 2),
(13,'Manchester by the Sea','Un relato profundo, doloroso y realista sobre el duelo, la culpa y los lazos familiares.', 7.8, 3),
(14,'The Hangover','Tres amigos se despiertan tras una despedida de soltero en Las Vegas sin recordar absolutamente nada y habiendo perdido al novio.', 7.7, 2),
(15,'Interstellar','Un grupo de astronautas viaja a través de un agujero de gusano en una espectacular aventura espacial para salvar a la humanidad.', 8.7, 4);


