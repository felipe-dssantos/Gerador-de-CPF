// Função para converter placa antiga para placa Mercosul
function converterParaMercosul(placaAntiga) {
    // Remover traços e espaços da placa antiga
    var placaSemEspacos = placaAntiga.replace(/[-\s]/g, '');

    // Verificar se a placa antiga tem o formato correto (XXX-NNNN)
    var regexAntiga = /^([a-zA-Z]{3})(\d{4})$/;
    var match = placaSemEspacos.match(regexAntiga);

    if (match) {
        // Formatar para o padrão Mercosul (XXXN1A23)
        var placaMercosul = match[1] + '1' + match[2].charAt(0) + '2' + match[2].substring(1);
        return placaMercosul.toUpperCase();
    } else {
        return "Formato de placa antiga inválido";
    }
}

// Função para converter placa Mercosul para placa antiga
function converterParaAntiga(placaMercosul) {
    // Remover traços e espaços da placa Mercosul
    var placaSemEspacos = placaMercosul.replace(/[-\s]/g, '');

    // Verificar se a placa Mercosul tem o formato correto (XXXN1A23)
    var regexMercosul = /^([a-zA-Z]{3})1(\d{1})A(\d{2})$/;
    var match = placaSemEspacos.match(regexMercosul);

    if (match) {
        // Formatar para o padrão antigo (XXX-NNNN)
        var placaAntiga = match[1] + '-' + match[2] + match[3];
        return placaAntiga.toUpperCase();
    } else {
        return "Formato de placa Mercosul inválido";
    }
}

// Exemplo de uso
var placaAntiga = "abd-2030";
var placaMercosul = converterParaMercosul(placaAntiga);
console.log("Placa antiga:", placaAntiga);
console.log("Placa Mercosul:", placaMercosul);

var placaConvertida = converterParaAntiga(placaMercosul);
console.log("Placa Mercosul:", placaMercosul);
console.log("Placa antiga:", placaConvertida);
