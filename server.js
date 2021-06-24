const jsonServer = require('json-server');
const app = jsonServer.create();
const auth = require('json-server-auth');
const path = require('path');
const express = require('express');
const middlewares = jsonServer.defaults({
  static: "./dist"
});
const router = jsonServer.router('./db.json');
const PORT = process.env.PORT || 4000;

app.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
app.use('/api', middlewares, auth, router);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});
