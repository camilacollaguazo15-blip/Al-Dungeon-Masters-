import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../models/pelicula.model';

@Component({
  selector: 'app-pelicula-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pelicula-list.component.html',
  styleUrl: './pelicula-list.component.css'
})
export class PeliculaListComponent implements OnInit {
  // Estado reactivo usando Signals de Angular
  peliculas = signal<Pelicula[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas(): void {
    this.loading.set(true);
    this.error.set(null);
    this.peliculaService.getPeliculas().subscribe({
      next: (data) => {
        this.peliculas.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar películas', err);
        this.error.set('Error al cargar las películas. Verifica que el backend esté disponible.');
        this.loading.set(false);
      }
    });
  }

  eliminarPelicula(id: number | undefined): void {
    if (id && confirm('¿Estás seguro de que deseas eliminar esta película?')) {
      this.peliculaService.deletePelicula(id).subscribe({
        next: () => {
          this.cargarPeliculas(); // Recargar la lista
        },
        error: (err) => console.error('Error al eliminar película', err)
      });
    }
  }
}
