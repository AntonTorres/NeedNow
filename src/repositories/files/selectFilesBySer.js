const getPool = require("../../database/getPool");

const selectFilesBySer = async (serviceId) => {
  const pool = getPool();

  const [rows] = await pool.query(`SELECT id FROM files WHERE serviceId = ?`, [
    serviceId,
  ]);

  return rows[0];
};

module.exports = selectFilesBySer;
