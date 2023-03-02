const getPool = require("../../database/getPool");

const deleteFileByService = async (serviceId) => {
  const pool = getPool();

  await pool.query("DROP FROM files WHERE serviceId = ?", [serviceId]);
};

module.exports = deleteFileByService;
