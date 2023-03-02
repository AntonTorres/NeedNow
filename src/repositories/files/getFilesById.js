const getPool = require("../../database/getPool");

const getFilesById = async (fileId) => {
  const pool = getPool();
  const [file] = await pool.query("SELECT * FROM files WHERE id = ?", [fileId]);
  return file;
};

module.exports = getFilesById;
