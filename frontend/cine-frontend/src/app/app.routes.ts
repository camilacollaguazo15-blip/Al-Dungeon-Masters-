import { Routes } from '@angular/router';
import { PeliculaListComponent } from './components/pelicula-list/pelicula-list.component';
import { PeliculaFormComponent } from './components/pelicula-form/pelicula-form.component';

export const routes: Routes = [
  { path: 'peliculas', component: PeliculaListComponent },
  { path: 'peliculas/nuevo', component: PeliculaFormComponent },
  { path: '', redirectTo: '/peliculas', pathMatch: 'full' }
];
