const getPool = require("../../database/getPool");

const selectServiceById = async (id) => {
  const pool = getPool();

  const [[service]] = await pool.query("SELECT * FROM services WHERE id = ?", [
    id,
  ]);

  return service;
};

module.exports = selectServiceById;
