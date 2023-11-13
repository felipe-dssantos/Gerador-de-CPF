const express = require('express');
const app = express();
const port = 3000;
const gerarCpfAleatorio = require('./GeradorCPF/geradorcpf');
const gerarCNPJ = require('./GeradorCNPJ/geradorcnpj');
const gerarSenha = require('./GeradorSenha/geradorsenha');
var senha;
var CNPJ;
var CPF;


app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get("/gerarcpfsemponto", (req, res) => {

  CPF = gerarCpfAleatorio(false);

  res.redirect("/");

});

app.get("/gerarcpfcomponto", (req, res) => {
  CPF = gerarCpfAleatorio(true);
  res.redirect("/");
});

app.get("/gerarcnpj",(req, res)=>{
  CNPJ = gerarCNPJ(true);
  res.redirect("/");
});

app.get("/gerarcnpjsemponto",(req, res)=>{
  CNPJ = gerarCNPJ(false);
  res.redirect("/");
});

app.get("/gerarsenha", (req,res)=>{
  senha = gerarSenha();
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("index", ({CPF,CNPJ,senha}));
});



 

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
