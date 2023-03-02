const getPool = require("../../database/getPool");

const selectServices = async () => {
  const pool = getPool();

  const [services] = await pool.query("SELECT * FROM services");

  return services;
};

module.exports = selectServices;
