const getPool = require("../../database/getPool");

const deleteServiceFile = async (imageName, serviceId) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "DELETE FROM files WHERE id = ? AND serviceId = ?",
    [imageName, serviceId]
  );
  return insertId;
};

module.exports = deleteServiceFile;
