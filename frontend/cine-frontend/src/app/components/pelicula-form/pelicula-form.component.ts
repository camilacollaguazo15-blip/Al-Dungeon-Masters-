import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-pelicula-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './pelicula-form.component.html',
  styleUrl: './pelicula-form.component.css'
})
export class PeliculaFormComponent {
  peliculaForm: FormGroup;
  enviando = false;

  // Géneros disponibles (estos podrían venir de un servicio en el futuro)
  generos = [
    { id: 1, nombre: 'Acción' },
    { id: 2, nombre: 'Drama' },
    { id: 3, nombre: 'Comedia' },
    { id: 4, nombre: 'Ciencia Ficción' },
    { id: 5, nombre: 'Horror' }
  ];

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculaService,
    private router: Router
  ) {
    // Construcción del formulario con validaciones
    this.peliculaForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      ano: ['', [Validators.required, Validators.min(1800), Validators.max(2099)]],
      director: ['', [Validators.required, Validators.minLength(3)]],
      generoId: [1, [Validators.required]]
    });
  }

  // Getter para facilitar acceso a los controles en la plantilla
  get titulo() { return this.peliculaForm.get('titulo'); }
  get ano() { return this.peliculaForm.get('ano'); }
  get director() { return this.peliculaForm.get('director'); }
  get generoId() { return this.peliculaForm.get('generoId'); }

  onSubmit(): void {
    if (this.peliculaForm.valid) {
      this.enviando = true;
      this.peliculaService.createPelicula(this.peliculaForm.value).subscribe({
        next: () => {
          alert('¡Película guardada con éxito!');
          this.router.navigate(['/peliculas']);
        },
        error: (err) => {
          console.error('Error al guardar', err);
          alert('Error al guardar la película. Verifica que el backend esté disponible.');
          this.enviando = false;
        }
      });
    } else {
      alert('Por favor, rellena todos los campos correctamente.');
    }
  }

  onCancel(): void {
    this.router.navigate(['/peliculas']);
  }
}
