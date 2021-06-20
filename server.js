const jsonServer = require("json-server");
const server = jsonServer.create();
const auth = require('json-server-auth');
const router = jsonServer.router("./db.json");

const PORT = process.env.PORT || 4000;

server.db = router.db
server.use(auth);
server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});
