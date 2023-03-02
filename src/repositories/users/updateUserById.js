const getPool = require("../../database/getPool");

const updateUserById = async (user) => {
  const { name, password, email, biography, id } = user;

  const pool = getPool();

  await pool.query(
    "UPDATE users SET name = ?, password = ?, email = ?, biography = ? WHERE id = ?",
    [name, password, email, biography, id]
  );
};

module.exports = updateUserById;
