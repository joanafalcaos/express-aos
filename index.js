// index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Atividade p/ disciplina aplicacoes orientadas a servicos. UNICAP.");
});

module.exports = app;

