-- Los distinto géneros:
INSERT INTO Generos (nombre_genero) VALUES ('Accion');
INSERT INTO Generos (nombre_genero) VALUES ('Comedia');
INSERT INTO Generos (nombre_genero) VALUES ('Drama');
INSERT INTO Generos (nombre_genero) VALUES ('Aventura');
INSERT INTO Generos (nombre_genero) VALUES ('Terror');

-- Toda la información de las películas:
INSERT INTO Peliculas (nombre_pelicula, descripcion, imdb_rating, id_genero) VALUES 
('Mad Max: Fury Road', 'Una persecución implacable en un futuro postapocalíptico con un despliegue visual e imponente.', 8.1, 1),
('The Shawshank Redemption', 'Una conmovedora historia sobre la esperanza, la paciencia y la amistad dentro de una prisión de máxima seguridad.', 9.3, 3),
('Whiplash', 'La obsesión de un joven baterista de jazz y la relación destructiva con su despiadado e inflexible profesor.', 8.5, 3),
('Hereditary', 'Una pesadilla de terror psicológico y sobrenatural sobre los oscuros secretos de una familia tras la muerte de la abuela.', 7.3, 5),
('The Conjuring', 'Basada en los expedientes reales de los investigadores paranormales Ed y Lorraine Warren enfrentándose a una presencia demoníaca.', 7.5, 5),
('The Thing', 'Un clásico del terror de ciencia ficción donde un grupo de científicos en la Antártida es acechado por una criatura cambiaformas.', 8.2, 5),
('Raiders of the Lost Ark', 'La primera e icónica aventura de Indiana Jones en busca del Arca de la Alianza.', 8.4, 4),
('Superbad', 'Dos amigos de la secundaria intentan conseguir alcohol para una fiesta en una noche desastrosa y llena de risas.', 7.6, 2),
('The Lord of the Rings: The Fellowship of the Ring', 'El inicio de un viaje épico para destruir un anillo de poder y salvar a la Tierra Media.', 8.9, 4),
('John Wick', 'Un asesino retirado regresa a la acción para vengar lo único que le quedaba, redefiniendo el cine de acción moderno.', 7.4, 1),
('Die Hard', 'El clásico de acción por excelencia donde un policía atrapado en un rascacielos se enfrenta a un grupo de terroristas.', 8.2, 1),
('The Grand Budapest Hotel', 'Una comedia con el estilo visual único de Wes Anderson, llena de personajes excéntricos y enredos.', 8.1, 2),
('Manchester by the Sea', 'Un relato profundo, doloroso y realista sobre el duelo, la culpa y los lazos familiares.', 7.8, 3),
('The Hangover', 'Tres amigos se despiertan tras una despedida de soltero en Las Vegas sin recordar absolutamente nada y habiendo perdido al novio.', 7.7, 2),
('Interstellar', 'Un grupo de astronautas viaja a través de un agujero de gusano en una espectacular aventura espacial para salvar a la humanidad.', 8.7, 4);
