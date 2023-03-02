require("dotenv").config();
const getPool = require("./getPool");

const populateDb = async () => {
  try {
    const pool = getPool();

    await pool.query(
      `INSERT INTO users (name, password, email) VALUES 
      ("Andrea Carrasco", "123123", "andreaandrea@email.com"),
      ("Juana Peña", "123123", "juanajuana@email.com"),
      ("Antón Torres", "123123", "antonanton@email.com")`
    );

    console.log("Usuarios introducidos.");

    await pool.query(
      `INSERT INTO services (tittle, description, resolve, userId) VALUES 
      ("Traductor", "Necesito un traductor multilingüe para revista digital.", 0, 2),
      ("Editor", "Necesito un editor de videos e imágenes para importante canal de YT.", 0, 1),
      ("Ayuda", "Busco un asistente que se encargue de realizar todas mis tareas administrativas.", 0, 3)`
    );

    console.log("Servicios introducidos.");
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
