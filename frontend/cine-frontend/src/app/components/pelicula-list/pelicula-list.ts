// src/app/components/pelicula-list/pelicula-list.ts
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PeliculaService } from '../../services/pelicula';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pelicula-list.html',
  styleUrl: './pelicula-list.css'
})
export class PeliculaList implements OnInit {

  peliculas = signal<Pelicula[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.peliculaService.getAll().subscribe({
      next: (datos) => {
        this.peliculas.set(datos);
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set('No se pudo conectar con el servidor. ¿Está el backend arrancado?');
        this.cargando.set(false);
        console.error('Error al cargar películas:', err);
      }
    });
  }
}
