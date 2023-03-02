require("dotenv").config();
const getPool = require("./getPool");

const initDb = async () => {
  try {
    const pool = getPool();

    await pool.query("DROP TABLE IF EXISTS files;");
    await pool.query("DROP TABLE IF EXISTS comments;");
    await pool.query("DROP TABLE IF EXISTS services;");
    await pool.query("DROP TABLE IF EXISTS users;");

    console.log("Deleted");

    await pool.query(`
        CREATE TABLE users (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(500) NOT NULL,
            password VARCHAR(500) NOT NULL,
            email VARCHAR(500) UNIQUE NOT NULL,
            biography VARCHAR(2500),
            photo VARCHAR(255) 
        );
        `);
    await pool.query(`
        CREATE TABLE services (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            tittle VARCHAR(500) NOT NULL,
            description VARCHAR(2500) NOT NULL,
            userId INT UNSIGNED NOT NULL,
            resolve BOOLEAN DEFAULT FALSE,
            FOREIGN KEY (userId) REFERENCES users(id)
        );
        `);
    await pool.query(`
        CREATE TABLE comments (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            comment VARCHAR(2500) NOT NULL,
            userId INT UNSIGNED NOT NULL,
            serviceId INT UNSIGNED NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id),
            FOREIGN KEY (serviceId) REFERENCES services(id) 
        );
        `);
    await pool.query(`
        CREATE TABLE files (
          id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          file VARCHAR(100) NOT NULL,
          serviceId INT UNSIGNED NOT NULL,
          FOREIGN KEY (serviceId) REFERENCES services(id)
        );
        `);

    console.log("Created!");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

initDb();
