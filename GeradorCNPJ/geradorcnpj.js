function gerarCNPJ(ponto){
    const n= 9;
    const n1 = Math.floor(Math.random() * n) + 1;
    const n2 = Math.floor(Math.random() * n); 
    const n3 = Math.floor(Math.random() * n);
    const n4 = Math.floor(Math.random() * n);
    const n5 = Math.floor(Math.random() * n);
    const n6 = Math.floor(Math.random() * n);
    const n7 = Math.floor(Math.random() * n);
    const n8 = Math.floor(Math.random() * n);
    const n9 = 0; // O nono dígito é sempre 0 no início
    const n10 = 0; // O décimo dígito é sempre 0 no início
    const n11 = 0; // O décimo primeiro dígito é sempre 0 no início
    const n12 = 1; // O décimo segundo dígito é sempre 1 no início

    const digito1 = (n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5) % 11;
    const digito2 = (n12 * 2 + digito1 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5) % 11;

    if(ponto){
    const cnpj = `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${digito1}${digito2}`;
    return cnpj;
    }else{
        const cnpj = `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${digito1}${digito2}`;
        return cnpj;
    }
    
}



module.exports = gerarCNPJ;