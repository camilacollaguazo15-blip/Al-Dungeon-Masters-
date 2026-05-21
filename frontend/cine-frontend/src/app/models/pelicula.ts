// src/app/models/pelicula.ts

import { Genero } from './genero';

export interface Pelicula {
  id_pelicula?: number;
  nombre_pelicula: string;
  descripcion: string;
  imdb_rating: number;
  genero?: Genero;
}
