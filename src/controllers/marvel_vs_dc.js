//MARVEL VS DC

import { pool } from "../db.js";

export const getFilms = async (req, res) => {
  try {
    //throw new Error("my Error");
    console.log('recibido')
    const [rows] = await pool.query("SELECT * FROM marvel_vs_dc");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "error films",
    });
  }
};

export const getFilm = async (req, res) => {
  try {
    console.log(req.params.id);
    const [rows] = await pool.query("SELECT * FROM marvel_vs_dc WHERE id = ?", [
      req.params.id,
    ]);
    //Por si no existe el id de empleado en la base de datos
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });
    res.send(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "error",
    });
  }
};

export const createFilm = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO marvel_vs_dc (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error",
    });
  }
};

export const deleteFilm = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM marvel_vs_dc WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "error",
    });
  }
};

export const updateFilm = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    //Para actualizar datos parcialmente se utiliza IFNULL
    const [result] = await pool.query(
      "UPDATE marvel_vs_dc SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "employee not found",
      });

    const [rows] = await pool.query("SELECT * FROM marvel_vs_dc WHERE id = ?", [
      id,
    ]);

    console.log(result);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "error",
    });
  }
};
