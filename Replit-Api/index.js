const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const peth = require("path");

//Agregar soporte para CORs (opcioal pero utl)
const cors = require("cors");
server.use(cors());

//Servir archivos estaticos desde la carpeta "public"
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

//Usar el puerto dinamico de Replitt
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Servidor en linea: http://localhost:${PORT}");
});
