const express = require("express");
const app = express();

const rotas = require("./controller/controller");

app.use("/", rotas);

const PORT = 3055;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});