# Like Me - Parte I

Desafío correspondiente al desarrollo de una aplicación que permite crear y visualizar publicaciones.

El proyecto utiliza una aplicación React como frontend y un servidor desarrollado con Node.js y Express, conectado a una base de datos PostgreSQL.

## Tecnologías utilizadas

- React
- Vite
- Node.js
- Express
- PostgreSQL
- pg
- CORS
- Axios
- dotenv

## Funcionalidades

- Obtener los posts almacenados en PostgreSQL.
- Crear nuevos posts desde la aplicación.
- Guardar título, imagen, descripción y likes de cada publicación.
- Comunicación entre el frontend y backend mediante solicitudes HTTP.
- Conexión a PostgreSQL utilizando el paquete `pg`.

## Endpoints

### Obtener posts

```http
GET /posts
```

Obtiene todos los registros almacenados en la tabla `posts`.

### Crear un post

```http
POST /posts
```

Recibe un nuevo post y lo almacena en PostgreSQL.

## Base de datos

Crear la base de datos:

```sql
CREATE DATABASE likeme;
```

Luego crear la tabla `posts`:

```sql
CREATE TABLE posts (
  id SERIAL,
  titulo VARCHAR(25),
  img VARCHAR(1000),
  descripcion VARCHAR(255),
  likes INT
);
```

## Variables de entorno

Crear un archivo `.env` tomando como referencia `.env.example`:

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=
DB_NAME=likeme
DB_PORT=5432
```

## Instalación

Instalar las dependencias:

```bash
npm install
```

Ejecutar el frontend:

```bash
npm run dev
```

Ejecutar el servidor:

```bash
npm run server
```

El frontend se ejecuta con Vite y el servidor Express utiliza el puerto `3000`.

## Autor

Valentina Muñoz# desafio-like-me
