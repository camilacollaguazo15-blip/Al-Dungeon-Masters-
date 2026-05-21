export interface Pelicula {
  id?: number;
  titulo: string;
  descripcion: string;
  genero: string;
  generoNombre?: string;
  ano: number;
  duracion: number;
  director: string;
  clasificacion: string;
  imagen?: string;
}
