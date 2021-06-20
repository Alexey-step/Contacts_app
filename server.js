const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require('path');
const auth = require('json-server-auth');
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./dist"
});
const PORT = process.env.PORT || 4000;

server.db = router.db
server.use(middlewares);
server.use(auth);
server.use(router);

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});
