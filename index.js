const express = require('express');
const app = express();
const port = 3000;
const gerarCpfAleatorio = require('./GeradorCPF/geradorcpf');

app.set('view engine', 'ejs');
app.use(express.static('public'));
const resultado = gerarCpfAleatorio();
var CPF = '';
app.get("/gerarcpfsemponto", (req, res) => {

  CPF = gerarCpfAleatorio(false);

  res.redirect("/");

});

app.get("/gerarcpfcomponto", (req, res) => {

  CPF = gerarCpfAleatorio(true);

  res.redirect("/");

});
var CPF1 = '';
function pontuacao(){
  return CPF1.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-');
};
app.get("/", (req, res) => {
  res.render("index", ({ CPF}));
});



 

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
