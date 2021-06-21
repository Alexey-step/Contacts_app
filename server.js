const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const auth = require('json-server-auth');
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./dist"
});
const PORT = process.env.PORT || 4000;

server.db = router.db
server.use(middlewares);
server.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist/index.html'))
})
server.use(auth);
server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});
