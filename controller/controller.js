const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

// caminho do bd.json
const caminho = path.join(__dirname, "../repository/bd.json");


// ROTA /usuario
router.get("/usuario", (req, res) => {

    const dados = fs.readFileSync(caminho);
    const usuarios = JSON.parse(dados);

    res.json(usuarios);

});


// ROTA /site
router.get("/site", (req, res) => {

    res.send(`Bem-vindo ao servidor Node.js
Este é um exemplo de rota simples.`);

});


// ROTA /calculo/:valor
router.get("/calculo/:valor", (req, res) => {

    const valor = req.params.valor;
    const resultado = valor * valor;

    res.send(`O valor ${valor} elevado ao quadrado é ${resultado}`);

});

module.exports = router;