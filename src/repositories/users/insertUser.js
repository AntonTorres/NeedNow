const getPool = require("../../database/getPool");

const insertUser = async (user) => {
  const { name, encryptedPass, email, biography, photo } = user;

  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO users (name, password, email, biography, photo) VALUES (?, ?, ?, ?, ?)",
    [name, encryptedPass, email, biography, photo]
  );

  return insertId;
};

module.exports = insertUser;
