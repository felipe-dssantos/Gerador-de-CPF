const express = require('express');
const app = express();
const port = 3000;
const geradorCpf = require('./GeradorCPF/geradorcpf');
app.set('view engine', 'ejs');
app.use(express.static('public'));

geradorCpf();
var CPF = '';

app.get("/gerarcpf", (req, res) => {

  CPF = geradorCpf();
  CPF1 = CPF;
 CPF1 = pontuacao();
 
  res.redirect("/");

});
var CPF1 = '';
function pontuacao(){
  return CPF1.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-');
};
app.get("/", (req, res) => {
  CPF: CPF;
  CPF: CPF1;
  res.render("index", ({ CPF,CPF1 }));
});



 

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
