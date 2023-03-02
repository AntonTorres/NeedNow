const getPool = require("../../database/getPool");

const insertService = async (service) => {
  const { tittle, description, resolve, userId } = service;

  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO services (tittle, description, resolve, userId) VALUES (?, ?, ?, ?)",
    [tittle, description, resolve, userId]
  );
  return insertId;
};

module.exports = insertService;
