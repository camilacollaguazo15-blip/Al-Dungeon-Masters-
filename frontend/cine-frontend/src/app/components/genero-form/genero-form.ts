// src/app/components/genero-form/genero-form.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { GeneroService } from '../../services/genero';
import { Genero } from '../../models/genero';

@Component({
  selector: 'app-genero-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './genero-form.html',
  styleUrl: './genero-form.css'
})
export class GeneroForm {

  private fb = inject(FormBuilder);
  private generoService = inject(GeneroService);
  private router = inject(Router);

  // Formulario reactivo con validaciones
  generoForm: FormGroup = this.fb.group({
    nombre:      ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required, Validators.maxLength(250)]]
  });

  // Para mostrar el spinner/mensaje mientras se guarda
  guardando = false;

  // Getters cómodos para acceder a los controles en el HTML
  get nombre()      { return this.generoForm.get('nombre')!; }
  get descripcion() { return this.generoForm.get('descripcion')!; }

  onSubmit(): void {
    // Si hay errores de validación, marcamos todo para mostrar los mensajes
    if (this.generoForm.invalid) {
      this.generoForm.markAllAsTouched();
      return;
    }

    this.guardando = true;

    const nuevoGenero: Genero = {
      nombre:      this.generoForm.value.nombre,
      descripcion: this.generoForm.value.descripcion
    };

    // Llamamos al POST de la Persona 2
    this.generoService.create(nuevoGenero).subscribe({
      next: () => {
        alert('¡Género creado con éxito en la base de datos H2!');
        this.router.navigate(['/generos']); // volvemos a la lista
      },
      error: (err) => {
        console.error('Error al enviar el género al backend:', err);
        alert('No se pudo conectar con el servidor de la Persona 2.');
        this.guardando = false;
      }
    });
  }
}
