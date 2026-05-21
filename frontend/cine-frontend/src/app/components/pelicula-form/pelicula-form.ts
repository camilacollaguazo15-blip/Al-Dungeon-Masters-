import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PeliculaService } from '../../services/pelicula';
import { GeneroService } from '../../services/genero';
import { Genero } from '../../models/genero';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './pelicula-form.html',
  styleUrl: './pelicula-form.css'
})
export class PeliculaForm implements OnInit {

  private fb = inject(FormBuilder);
  private peliculaService = inject(PeliculaService);
  private generoService = inject(GeneroService);
  private router = inject(Router);

  generos = signal<Genero[]>([]);
  cargandoGeneros = signal<boolean>(true);
  guardando = false;

  peliculaForm: FormGroup = this.fb.group({
    titulo:   ['', [Validators.required, Validators.minLength(2)]],
    anio:     ['', [Validators.required, Validators.min(1888), Validators.max(new Date().getFullYear() + 10)]],
    director: ['', [Validators.required, Validators.minLength(3)]],
    generoId: ['', [Validators.required]]
  });

  get titulo()   { return this.peliculaForm.get('titulo')!; }
  get anio()     { return this.peliculaForm.get('anio')!; }
  get director() { return this.peliculaForm.get('director')!; }
  get generoId() { return this.peliculaForm.get('generoId')!; }

  ngOnInit(): void {
    this.generoService.getAll().subscribe({
      next: (datos) => {
        this.generos.set(datos);
        this.cargandoGeneros.set(false);
      },
      error: (err) => {
        console.error('Error al cargar géneros para el formulario:', err);
        alert('No se pudieron cargar los géneros. Asegúrate de que el backend está corriendo.');
        this.cargandoGeneros.set(false);
      }
    });
  }

  onSubmit(): void {
    if (this.peliculaForm.invalid) {
      this.peliculaForm.markAllAsTouched();
      return;
    }

    this.guardando = true;

    const formVal = this.peliculaForm.value;
    const selectedGenId = Number(formVal.generoId);

    const selectedGenero = this.generos().find(g => g.id_genero === selectedGenId);


    const nuevaPelicula: Pelicula = {
      nombre_pelicula: formVal.titulo,
      descripcion: `Director: ${formVal.director} | Año: ${formVal.anio}`,
      imdb_rating: 8.0,
      genero: selectedGenero ? {
        id_genero: selectedGenero.id_genero,
        nombre_genero: selectedGenero.nombre_genero
      } : undefined
    };

    this.peliculaService.create(nuevaPelicula).subscribe({
      next: () => {
        alert('¡Película creada con éxito en la base de datos H2!');
        this.router.navigate(['/peliculas']);
      },
      error: (err) => {
        console.error('Error al guardar la película:', err);
        alert('Hubo un error al conectar con el servidor.');
        this.guardando = false;
      }
    });
  }
}
