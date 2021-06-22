const jsonServer = require("json-server");
const server = jsonServer.create();
const auth = require('json-server-auth');
const path = require("path");
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./dist"
});
const PORT = process.env.PORT || 4000;

server.db = router.db
server.use(middlewares);
server.get("/**", (req, res) => {
  if (res.status(404)) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  } else {
    console.log(req)
    return req
  }
})

server.use(auth);
server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});
