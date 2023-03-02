const getPool = require("../../database/getPool");

const deleteCommentBySerAndUser = async (userId, serviceId) => {
  const pool = getPool();

  await pool.query("DROP FROM comments WHERE userId = ? AND serviceId = ?", [
    userId,
    serviceId,
  ]);
};

module.exports = deleteCommentBySerAndUser;
