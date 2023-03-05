require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

//Requerimos todos los controladores de los usuarios.
const {
  postUser,
  loginUser,
  logedUser,
  putUser,
  deleteUser,
  logOut,
} = require("./controllers/users");

//Requerimos todos los controladores de los servicios.
const {
  postService,
  getServices,
  deleteService,
  putService,
  getService,
} = require("./controllers/services");

//Requerimos todos los controladores de los comentarios.
const {
  postComment,
  deleteComment,
  putComment,
} = require("./controllers/comments");

//Requerimos los controladores de los archivos
const deleteFile = require("./controllers/files/deleteFile");

//Requerimos todos los middlewares
const { handdleError, handdleNotFound, validateR } = require("./middlewares");

//////////
const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use(fileUpload());
app.use(cors());

//Endpoints usuarios
app.post("/users", postUser);
app.post("/login", loginUser);
//app.post("/logout", validateR, logOut);
app.get("/users/:id", validateR, logedUser);
app.put("/users/:id", validateR, putUser);
app.delete("/users/:id", validateR, deleteUser);

//Endpoints services
app.get("/", getServices);
app.get("/services/:id", getService);
app.post("/services", validateR, postService);
app.delete("/services/:id", validateR, deleteService);
app.put("/services/:id", validateR, putService);

//Endpoints comentarios
app.post("/services/:id/comment", validateR, postComment);
app.delete("/services/:id/comment/:id", validateR, deleteComment);
app.put("/services/:id/comment/:id", validateR, putComment);

//Endpoints archivos
app.delete("/services/:id/files/:id", validateR, deleteFile);

//Middleware errores
app.use(handdleNotFound);
app.use(handdleError);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
