const express = require('express');
const app = express();
const port = 3000;
const geradorCpf = require('./GeradorCPF/geradorcpf');
app.set('view engine', 'ejs');
app.use(express.static('public'));
//app.set('views', path.join(__dirname, 'public'));
geradorCpf();
var CPF = geradorCpf();

app.get("/gerarcpf", (req, res) => {

  CPF = geradorCpf();

  res.redirect("/");

});

app.get("/", (req, res) => {
  CPF: CPF;
  res.render("index", ({ CPF }));
});



app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
