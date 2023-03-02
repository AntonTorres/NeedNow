const getPool = require("../../database/getPool");

const insertServiceFile = async (fileName, serviceId) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO files (file, serviceId) VALUES (?, ?)",
    [fileName, serviceId]
  );
  return insertId;
};

module.exports = insertServiceFile;
