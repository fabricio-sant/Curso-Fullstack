const express = require("express");
const app = express();
const port = 3001;

//Criar uma função
//rota principal
app.get('/', (req, res) => {
    res.send("Bem vindo ao meu projeto de Alimentos")
});

//executando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});