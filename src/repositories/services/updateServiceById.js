const getPool = require("../../database/getPool");

const updateServiceById = async (service) => {
  const { tittle, description, resolve, id } = service;

  const pool = getPool();

  await pool.query(
    "UPDATE services SET tittle = ?, description = ?, resolve = ? WHERE id = ?",
    [tittle, description, resolve, id]
  );
};

module.exports = updateServiceById;
