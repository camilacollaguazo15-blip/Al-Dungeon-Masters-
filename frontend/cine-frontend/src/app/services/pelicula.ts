// src/app/services/pelicula.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  // URL base del backend Spring Boot para películas
  private apiUrl = 'http://localhost:8080/peliculas';

  constructor(private http: HttpClient) {}

  // GET /peliculas → lista completa de películas
  getAll(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  // GET /peliculas/:id → detalle de una película
  getById(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.apiUrl}/${id}`);
  }

  // POST /peliculas → crear nueva película
  create(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.post<Pelicula>(this.apiUrl, pelicula);
  }
}
