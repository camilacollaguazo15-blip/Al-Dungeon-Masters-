// src/app/components/genero-detail/genero-detail.ts
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GeneroService } from '../../services/genero';
import { Genero } from '../../models/genero';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-genero-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './genero-detail.html',
  styleUrl: './genero-detail.css'
})
export class GeneroDetail implements OnInit {

  // Signals para el estado del componente
  genero = signal<Genero | null>(null);
  peliculas = signal<Pelicula[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(
    private route: ActivatedRoute,      // Para leer el :id de la URL
    private generoService: GeneroService
  ) {}

  ngOnInit(): void {
    // Leemos el parámetro :id de la ruta /generos/:id
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Petición 1: datos del género
    this.generoService.getById(id).subscribe({
      next: (datos) => {
        this.genero.set(datos);
        // Petición 2: películas del género (endpoint GET /api/generos/:id/peliculas)
        this.generoService.getPeliculasByGenero(id).subscribe({
          next: (peliculas) => {
            this.peliculas.set(peliculas);
            this.cargando.set(false);
          },
          error: (err) => {
            // Si falla la lista de películas, mostramos el género igualmente
            this.peliculas.set([]);
            this.cargando.set(false);
            console.error('Error al cargar películas del género:', err);
          }
        });
      },
      error: (err) => {
        this.error.set('No se encontró el género o el servidor no está disponible.');
        this.cargando.set(false);
        console.error('Error al cargar el género:', err);
      }
    });
  }
}
