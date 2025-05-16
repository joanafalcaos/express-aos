// index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Atividade p/ disciplina aplicacoes orientadas a servicos. UNICAP.");
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app;

