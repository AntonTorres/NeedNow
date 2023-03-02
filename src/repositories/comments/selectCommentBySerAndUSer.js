const getPool = require("../../database/getPool");

const selectCommentBySerAndUser = async (serviceId, userId) => {
  const pool = getPool();

  const [[comment]] = await pool.query(
    `SELECT id FROM comments WHERE userId = ? AND serviceId = ?`,
    [userId, serviceId]
  );

  return comment;
};

module.exports = selectCommentBySerAndUser;
