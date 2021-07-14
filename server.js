const jsonServer = require('json-server');
const express = require('express');
const path = require('path');
const app = jsonServer.create();
const auth = require('json-server-auth');
const middlewares = jsonServer.defaults({
  static: "./dist"
});
const router = jsonServer.router('./db.json');
const PORT = process.env.PORT || 4000;

app.db = router.db;
app.use(middlewares);
app.use(auth);
app.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))

app.use(router);

app.get('/*', (req, res) => {
  let url = path.join(__dirname, 'dist', 'index.html');
  if (!url.startsWith('/app/'))
    url = url.substring(1);
  res.sendFile(url);
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
