const getPool = require("../../database/getPool");

const deleteServiceById = async (id) => {
  const pool = getPool();

  await pool.query("DELETE FROM services WHERE id = ?", [id]);
};

module.exports = deleteServiceById;
