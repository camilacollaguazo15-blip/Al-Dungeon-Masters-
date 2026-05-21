// src/app/components/genero-list/genero-list.ts
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GeneroService } from '../../services/genero';
import { Genero } from '../../models/genero';

@Component({
  selector: 'app-genero-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './genero-list.html',
  styleUrl: './genero-list.css'
})
export class GeneroList implements OnInit {

  // Signal para guardar la lista de géneros (estado reactivo)
  generos = signal<Genero[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private generoService: GeneroService) {}

  ngOnInit(): void {
    // Al cargar el componente pedimos los géneros a la API de la Persona 2
    this.generoService.getAll().subscribe({
      next: (datos) => {
        this.generos.set(datos);   // actualizamos el signal
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set('No se pudo conectar con el servidor. ¿Está el backend arrancado?');
        this.cargando.set(false);
        console.error('Error al cargar géneros:', err);
      }
    });
  }
}
