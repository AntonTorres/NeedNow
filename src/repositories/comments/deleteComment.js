const getPool = require("../../database/getPool");

const deleteComment = async (serviceId, userId) => {
  const pool = getPool();

  await pool.query("DELETE FROM comments WHERE serviceId = ? AND userId = ?", [
    serviceId,
    userId,
  ]);
};

module.exports = deleteComment;
