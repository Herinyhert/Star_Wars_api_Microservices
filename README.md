# Star Wars API Microservices
Este repositorio contiene una API de servicios web relacionados con el universo de Star Wars, implementada como microservicios. Cada microservicio se ejecuta en su propio contenedor Docker y utiliza MongoDB como base de datos.

# Descripción del proyecto
El proyecto se compone de varios microservicios interconectados, cada uno ofreciendo funcionalidades específicas relacionadas con Star Wars, como personajes, películas y planetas. Cada microservicio es independiente y se puede escalar y mantener por separado.

# Tecnologías utilizadas
Node.js - MongoDB - Docker

# Estructura del repositorio
El repositorio está organizado de la siguiente manera:
/database: Contiene los archivos relacionados con la base de datos y la conexión a MongoDB.
/src: Contiene el código fuente de los microservicios.
/routes: Contiene las rutas y controladores de la API.
/models: Contiene los modelos de datos utilizados por los microservicios.
/config: Contiene archivos de configuración para el proyecto.
/test: Contiene pruebas unitarias y de integración.

# Instrucciones de instalación
Clona este repositorio en tu máquina local.
Asegúrate de tener instalados Node.js, MongoDB y Docker en tu sistema.
Configura las variables de entorno necesarias, como la conexión a la base de datos MongoDB y cualquier otra configuración específica.
Abre una terminal y navega hasta la carpeta raíz del proyecto.
Ejecuta npm install para instalar las dependencias de Node.js.
Inicia los contenedores Docker ejecutando docker-compose up -d.
Los microservicios estarán disponibles en los puertos asignados en el archivo docker-compose.yml.
Accede a la API desde http://34.125.174.191:8000.

# Documentación de la API
A continuación se detallan los endpoints y las funcionalidades disponibles en cada microservicio:

/characters: Gestiona información de personajes de Star Wars.
/films: Proporciona detalles sobre las películas de Star Wars.
/planets: Ofrece información sobre los planetas del universo de Star Wars.
Para obtener más detalles sobre cómo utilizar cada microservicio, consulta la documentación específica en el directorio /src de cada servicio.

# Contribuciones
Las contribuciones a este proyecto son bienvenidas. Si encuentras algún problema o tienes alguna sugerencia de mejora, no dudes en abrir un issue o enviar un pull request.
