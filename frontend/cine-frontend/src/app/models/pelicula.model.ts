export interface Pelicula {
  id?: number;
  titulo: string;
  ano: number;
  director: string;
  generoId: number; // Relación 1:M (Entidad hija apunta a la principal)
  generoNombre?: string;
}
