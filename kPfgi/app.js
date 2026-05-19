const express = require("express");
const app = express();
const port = 3001;

//MIDDLEWARES com os dados
app.use(express.static('public'));

//Variavel com os dados
const alimentos = [
    {id: 1, nome: "Feijão", preco: 10},
    {id: 2, nome: "Carne", preco: 50},
    {id: 3, nome: "Frutas", preco: 70},
    {id: 4, nome: "Sopas", preco: 40}
];

const tiposPratos = [
    {id: 1, nome: "Entrada"},
    {id: 2, nome: "Prato Principal"},
    {id: 3, nome: "Sobremesa"},
    {id: 4, nome: "Prato Vegetariano"}
];

//Criar uma função
//rota principal
app.get('/', (req, res) => {
    res.send("Bem vindo ao meu projeto de Alimentos")
});

//Tipos de Pratos
app.get('/TiposPratos', (req, res) => {
    res.send(tiposPratos);
});

//Produtos
app.get('/Produtos', (req, res) => {
    res.send(alimentos);
});

//Rota home
app.get('/home', (req, res) => {
    //console.log("Olá",__dirname);
    res.sendFile(__dirname + '/public/index.html');
});


//Tipos de Pratos
app.get('/TiposPratos', (req, res) => {
    res.send(tiposPratos);
});

//executando o servidor
app.listen(port, () => {
    console.log(`Servidor do projeto,rodando em http://localhost:${port}`);
});