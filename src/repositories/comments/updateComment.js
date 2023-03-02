const getPool = require("../../database/getPool");

const updateComment = async (newComment, commentId, userId) => {
  const pool = getPool();
  console.log(newComment, commentId, userId);

  const result = await pool.query(
    "UPDATE comments SET comment = ? WHERE id = ? AND userId = ?",
    [newComment, commentId, userId]
  );
};

module.exports = updateComment;
