# Desafío Like Me

Proyecto desarrollado como parte del desafío **Like Me**, utilizando React para el frontend, Node.js con Express para el backend y PostgreSQL para la base de datos.

El proyecto fue desarrollado en dos etapas, incorporando progresivamente las operaciones necesarias para administrar las publicaciones.

## Desarrollo del desafío

### Parte I

En la primera etapa se implementó la conexión entre el frontend, el servidor y PostgreSQL.

Se incorporaron las siguientes funcionalidades:

- Conexión a PostgreSQL utilizando `pg`.
- Habilitación de CORS.
- Ruta `GET /posts` para obtener las publicaciones.
- Ruta `POST /posts` para crear nuevas publicaciones.
- Persistencia de los datos en PostgreSQL.

### Parte II

En la segunda etapa se amplió la API incorporando nuevas operaciones sobre las publicaciones:

- Ruta `PUT /posts/like/:id` para aumentar los likes de una publicación.
- Ruta `DELETE /posts/:id` para eliminar una publicación.
- Manejo de posibles errores en las consultas SQL mediante `try/catch`.

Además, el proyecto se reorganizó separando el **frontend** y el **backend** en carpetas independientes.

## Tecnologías utilizadas

### Frontend

- React
- Vite
- Axios

### Backend

- Node.js
- Express
- PostgreSQL
- pg
- CORS
- dotenv
- Nodemon

## Estructura del proyecto

```text
desafio-like-me/
├── backend/
│   ├── index.cjs
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## Base de datos

Se utiliza una base de datos PostgreSQL llamada `likeme` con la siguiente tabla:

```sql
CREATE DATABASE likeme;

CREATE TABLE posts (
  id SERIAL,
  titulo VARCHAR(25),
  img VARCHAR(1000),
  descripcion VARCHAR(255),
  likes INT
);
```

## Endpoints

### Obtener publicaciones

```http
GET /posts
```

Obtiene todas las publicaciones almacenadas en PostgreSQL.

### Crear una publicación

```http
POST /posts
```

Permite agregar una nueva publicación.

### Dar like a una publicación

```http
PUT /posts/like/:id
```

Incrementa en uno la cantidad de likes de la publicación seleccionada.

### Eliminar una publicación

```http
DELETE /posts/:id
```

Elimina una publicación según su `id`.

## Variables de entorno

El backend utiliza un archivo `.env` para configurar la conexión con PostgreSQL.

Ejemplo disponible en `.env.example`:

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=
DB_NAME=likeme
DB_PORT=5432
```

> El archivo `.env` no se incluye en el repositorio por seguridad.

## Instalación y ejecución

Clonar el repositorio e instalar las dependencias de cada aplicación.

### Backend

```bash
cd backend
npm install
npm run server
```

El servidor se ejecuta en:

```text
http://localhost:3000
```

### Frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación.

## Funcionalidades

- Crear publicaciones.
- Visualizar publicaciones.
- Dar likes a las publicaciones.
- Eliminar publicaciones.
- Persistir los datos en PostgreSQL.
- Manejar errores de consultas SQL mediante `try/catch`.

## Autor

Valentina Muñoz