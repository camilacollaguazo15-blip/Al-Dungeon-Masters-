// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // RouterOutlet: renderiza el componente de la ruta activa
  // RouterLink / RouterLinkActive: navegación y clase CSS activa
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <span class="brand">🎬 CineApp</span>
      <div class="nav-links">
        <a routerLink="/generos"
           routerLinkActive="activo"
           [routerLinkActiveOptions]="{ exact: false }">
          Géneros
        </a>
        <a routerLink="/peliculas"
           routerLinkActive="activo"
           [routerLinkActiveOptions]="{ exact: false }">
          Películas
        </a>
      </div>
    </nav>

    <!-- Aquí se renderiza cada componente según la ruta -->
    <main>
      <router-outlet />
    </main>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.8rem 2rem;
      background: #111;
      color: white;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .brand {
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.5px;
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
    }

    .nav-links a {
      color: #ccc;
      text-decoration: none;
      font-size: 0.95rem;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      transition: color 0.2s;
    }

    .nav-links a:hover {
      color: white;
    }

    .nav-links a.activo {
      color: white;
      background: #e50914;
    }

    main {
      padding: 1rem 0;
    }
  `]
})
export class App {
  title = 'cine-frontend';
}
