# Guía de Inicio del Proyecto (CineApp)

Esta guía detalla los pasos y prerrequisitos necesarios para poner en marcha el backend (Spring Boot) y el frontend (Angular) de la aplicación.

---

## 📋 Prerrequisitos

Antes de iniciar, asegúrate de tener instalado:
* **Java JDK 17** (o superior).
* **Node.js** (versión 18 o superior recomendada) y **npm**.

---

## 🖥️ 1. Iniciar el Backend (Spring Boot)

El backend expone la API REST en el puerto `8080` y utiliza una base de datos en memoria H2.

### Pasos:
1. Abre una terminal y navega al directorio del backend:
   ```bash
   cd backend
   ```
2. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:
   * **En Windows (PowerShell/CMD):**
     ```powershell
     .\mvnw spring-boot:run
     ```
   * **En macOS/Linux/Git Bash:**
     ```bash
     ./mvnw spring-boot:run
     ```

### Información del Backend:
* **URL de la API:** `http://localhost:8080`
* **Endpoints principales:**
  * `GET /generos` - Lista de todos los géneros.
  * `POST /generos` - Crear un género nuevo.
  * `GET /peliculas` - Lista de todas las películas.
  * `POST /peliculas` - Crear una película nueva.
* **Consola H2 (Base de Datos):** `http://localhost:8080/h2-console`
  * **JDBC URL:** `jdbc:h2:mem:peliculadb`
  * **Usuario:** `sa`
  * **Contraseña:** *(dejar vacío)*

---

## 🎨 2. Iniciar el Frontend (Angular)

El frontend está desarrollado en Angular y se conecta con los endpoints del backend.

### Pasos:
1. Abre otra terminal y navega al directorio del frontend:
   ```bash
   cd frontend/cine-frontend
   ```
2. Instala las dependencias necesarias (si es la primera vez que clonas el proyecto):
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo en el puerto `4201` (para evitar conflictos de puertos en caso de que el puerto `4200` esté ocupado):
   ```bash
   npm run start -- --port 4201
   ```

### Información del Frontend:
* **URL de Acceso:** `http://localhost:4201`
* **Vistas principales:**
  * `/generos` - Listado y visualización de géneros de películas.
  * `/generos/nuevo` - Formulario para añadir géneros.
  * `/peliculas` - Listado de películas con sus respectivos géneros y calificaciones.
  * `/peliculas/nuevo` - Formulario de registro de nuevas películas.
