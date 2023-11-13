function gerarCpfAleatorio(ponto) {
  let cpf = '';
  for (let i = 0; i < 9; i++) {
    cpf += Math.floor(Math.random() * 10);
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let primeiroDigito = 11 - (soma % 11);
  if (primeiroDigito >= 10) {
    primeiroDigito = 0;
  }
  cpf += primeiroDigito;

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let segundoDigito = 11 - (soma % 11);
  if (segundoDigito >= 10) {
    segundoDigito = 0;
  }
  cpf += segundoDigito;
  if(ponto){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-');
  }else{
    return cpf;
  }
 
}
module.exports = gerarCpfAleatorio;