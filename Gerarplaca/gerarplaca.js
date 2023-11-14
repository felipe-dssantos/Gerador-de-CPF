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

    // Placa Mercosul: ABC1D23
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

function mercosulParaAntiga(merc) {
    // A placa Mercosul tem o formato ABC1D23
    // A placa antiga tem o formato ABC-1234

    // Extrai as letras e números da placa Mercosul
    const letras = merc.slice(0, 3);
    const numero1 = merc.slice(3, 4);
    const letra2 = merc.slice(4, 5);
    const numeros23 = merc.slice(5);

    // Forma a placa antiga
    const placaAntiga = letras + '-' + numero1 + letra2 + numeros23;
    return placaAntiga;
}



module.exports = {gerarPlacaMercosul,gerarPlacaAntiga};

