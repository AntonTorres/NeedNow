const getPool = require("../../database/getPool");

const getFilesByServiceId = async (serviceId) => {
  const pool = getPool();
  const [files] = await pool.query("SELECT * FROM files WHERE serviceId = ?", [
    serviceId,
  ]);
  return files;
};

module.exports = getFilesByServiceId;
