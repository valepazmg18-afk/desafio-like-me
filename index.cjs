require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM posts");
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener los posts" });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;

    const consulta =
      "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *";

    const values = [titulo, url, descripcion, 0];

    const { rows } = await pool.query(consulta, values);

    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear el post" });
  }
});

app.listen(3000, () => {
  console.log("Servidor encendido en puerto 3000");
});