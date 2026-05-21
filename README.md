Desarrollo del Backend (Spring Boot) – José Miguel Marcos Guerrero y Ian Borja Tomás.
Durante el desarrollo del backend trabajamos conjuntamente en la construcción completa de la API utilizando Spring Boot,
organizando el proyecto en controladores, modelos y repositorios dentro del paquete com.dungeonmastersfilms.app.
Definimos las entidades Genero y Pelicula, configurando sus relaciones JPA y desarrollando los endpoints REST necesarios
para la gestión de ambos recursos.

Además, realizamos la configuración de la base de datos H2, preparando el entorno para que el backend pudiera funcionar
sin necesidad de un servidor externo. Se creó y ajustó el archivo application.yaml, habilitando la consola H2 y permitiendo
la generación automática de tablas. También se elaboró el script data.sql con datos de ejemplo para facilitar las pruebas
del equipo de frontend.

Durante el proceso resolvimos problemas de compilación derivados de paquetes antiguos, reorganizamos la estructura del proyecto,
limpiamos el repositorio y subimos la versión funcional a GitHub tras sincronizar los cambios del equipo. Finalmente,
verificamos el correcto arranque del servidor, probamos los endpoints y dejamos el backend completamente preparado para
la integración con la base de datos y el desarrollo del frontend en Angular.

Tareas realizadas:

· Creación de la estructura completa del backend con Spring Boot.
· Organización del proyecto en controladores, modelos y repositorios.
· Implementación de las entidades Genero y Pelicula con relaciones JPA.
· Desarrollo de los endpoints REST para gestionar géneros y películas.
· Configuración de la base de datos H2 y habilitación de la consola /h2-console.
· Creación del archivo data.sql con datos de ejemplo para pruebas.
· Eliminación del paquete inicial com.example y migración a com.dungeonmastersfilms.app.
· Resolución de errores de compilación y ajuste de la estructura del proyecto.
· Limpieza del repositorio y preparación para trabajo colaborativo.
· Sincronización con el repositorio remoto y subida del backend funcional a GitHub.
· Verificación del arranque del servidor y pruebas de los endpoints.
· Preparación del backend para la integración con la base de datos y el frontend Angular.

Integración y Desarrollo del Frontend (Angular) Camila Collaguazo Chiluisa y Marco Calero Gallego
Durante el desarrollo del frontend completamos la integración de la aplicación con la API REST de Spring Boot y solucionamos
diversos problemas de conexión y serialización de datos. Implementamos las pantallas de películas (el listado de películas en /peliculas y el formulario de creación en /peliculas/nuevo). Sincronizamos los modelos de datos del
frontend con las entidades JPA del backend, corregimos la URL base de los servicios y agregamos la dependencia zone.js para asegurar
el correcto arranque de la aplicación. En el backend, resolvimos el bucle de serialización infinita aplicando anotaciones de Jackson
a las relaciones bidireccionales y eliminamos un constructor redundante que causaba problemas al intentar registrar nuevas películas.

Finalmente, verificamos la comunicación entre ambos entornos, comprobamos el almacenamiento persistente en la base de datos en memoria H2
y creamos recursos para facilitar el arranque del proyecto tanto de forma manual como automatizada.

Tareas realizadas:

· Implementación de la vista de listado de películas con su respectivo diseño CSS.
· Creación del formulario reactivo de películas con validaciones y mapeo de campos.
· Registro y configuración de las rutas de películas en el enrutador de Angular.
· Sincronización de los modelos typescript con las estructuras de las tablas H2.
· Corrección de la URL base del servicio de géneros eliminando prefijos erróneos.
· Solución a la pantalla en blanco en el navegador instalando e importando la librería zone.js.
· Resolución de la recursión infinita en la API REST utilizando anotaciones JsonIgnoreProperties.
· Eliminación del constructor de un solo parámetro en la clase Genero para habilitar el registro de películas.
· Creación del archivo de instrucciones COMO_INICIAR.md para la puesta en marcha manual de los servidores.
· Implementación del script de Windows iniciar.bat para el arranque automático de la aplicación completa.
