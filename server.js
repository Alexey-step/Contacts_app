const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./src/db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 4200;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});
