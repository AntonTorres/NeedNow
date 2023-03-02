const getPool = require("../../database/getPool");

const insertComment = async (comment, serviceId, userId) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO comments (comment, serviceId, userId) VALUES (?, ?, ?)",
    [comment, serviceId, userId]
  );
  return insertId;
};

module.exports = insertComment;
