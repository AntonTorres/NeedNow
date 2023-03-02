const getPool = require("../../database/getPool");

const deleteFileById = async (id) => {
  const pool = getPool();

  await pool.query("DELETE FROM files WHERE id = ?", [id]);
};

module.exports = deleteFileById;
