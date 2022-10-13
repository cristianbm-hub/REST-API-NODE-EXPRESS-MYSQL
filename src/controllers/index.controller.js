import { pool } from "../db.js";

export const ping = async (req, res) => {
    const [result] = await pool.query("SELECT 3+2 AS result");
    res.json('pong');
  }