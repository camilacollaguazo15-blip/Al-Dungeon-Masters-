// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirigir la raíz a /generos
  {
    path: '',
    redirectTo: 'generos',
    pathMatch: 'full'
  },

  // PERSONA 3 — Rutas de Géneros
  {
    path: 'generos',
    loadComponent: () =>
      import('./components/genero-list/genero-list').then(m => m.GeneroList)
  },
  {
    path: 'generos/nuevo',
    loadComponent: () =>
      import('./components/genero-form/genero-form').then(m => m.GeneroForm)
  },
  {
    path: 'generos/:id',
    loadComponent: () =>
      import('./components/genero-detail/genero-detail').then(m => m.GeneroDetail)
  },

  // PERSONA 4 — Rutas de Películas
  {
    path: 'peliculas',
    loadComponent: () =>
      import('./components/pelicula-list/pelicula-list').then(m => m.PeliculaList)
  },
  {
    path: 'peliculas/nuevo',
    loadComponent: () =>
      import('./components/pelicula-form/pelicula-form').then(m => m.PeliculaForm)
  },

  // Ruta comodín
  {
    path: '**',
    redirectTo: 'generos'
  }
];