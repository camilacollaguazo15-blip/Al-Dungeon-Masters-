// src/app/services/genero.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  // URL base del backend Spring Boot (Persona 2)
  private apiUrl = 'http://localhost:8080/generos';

  constructor(private http: HttpClient) {}

  // GET /api/generos → lista completa
  getAll(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.apiUrl);
  }

  // GET /api/generos/:id → detalle de un género
  getById(id: number): Observable<Genero> {
    return this.http.get<Genero>(`${this.apiUrl}/${id}`);
  }

  // GET /api/generos/:id/peliculas → películas de un género
  getPeliculasByGenero(id: number): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${this.apiUrl}/${id}/peliculas`);
  }

  // POST /api/generos → crear nuevo género
  create(genero: Genero): Observable<Genero> {
    return this.http.post<Genero>(this.apiUrl, genero);
  }
}
