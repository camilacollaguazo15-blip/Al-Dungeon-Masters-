// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Optimización de detección de cambios
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Router con las rutas definidas en app.routes.ts
    provideRouter(routes),

    // HttpClient GLOBAL — necesario para que los servicios puedan llamar al backend
    // Sin esto los inject(HttpClient) de los servicios fallan en runtime
    provideHttpClient()
  ]
};
