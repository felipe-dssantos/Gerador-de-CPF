function gerarPlacaMercosul() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';

    function gerarLetras(tamanho) {
        let result = '';
        for (let i = 0; i < tamanho; i++) {
            result += letras.charAt(Math.floor(Math.random() * letras.length));
        }
        return result;
    }

    function gerarNumeros(tamanho) {
        let result = '';
        for (let i = 0; i < tamanho; i++) {
            result += numeros.charAt(Math.floor(Math.random() * numeros.length));
        }
        return result;
    }

  
    const placa = gerarLetras(3) + gerarNumeros(1) + gerarLetras(1) + gerarNumeros(2);

    return placa;
}

function gerarPlacaAntiga() {
    // Gera três letras aleatórias
    function gerarLetra() {
        const codigo = Math.floor(Math.random() * 26) + 65; // Códigos ASCII de A a Z
        return String.fromCharCode(codigo);
    }

    // Gera quatro algarismos aleatórios
    function gerarNumero() {
        return Math.floor(Math.random() * 10);
    }

    // Gera a placa completa com um traço no meio
    const letras = Array.from({ length: 3 }, gerarLetra);
    const numeros = Array.from({ length: 4 }, gerarNumero);

    const PlacaAntiga = letras.join('') + '-' + numeros.join('');
    return PlacaAntiga;
}




module.exports = {gerarPlacaMercosul,gerarPlacaAntiga};

