function gerarSenha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const senhaArray = [];

    // Adiciona pelo menos 1 letra maiúscula
    senhaArray.push(caracteres.charAt(Math.floor(Math.random() * 26)));

    // Adiciona pelo menos 1 letra minúscula
    senhaArray.push(caracteres.charAt(Math.floor(Math.random() * 26) + 26));

    // Adiciona pelo menos 2 números
    senhaArray.push(caracteres.charAt(Math.floor(Math.random() * 10)));
    senhaArray.push(caracteres.charAt(Math.floor(Math.random() * 10)));

    // Adiciona caracteres restantes
    for (let i = senhaArray.length; i < 9; i++) {
        senhaArray.push(caracteres.charAt(Math.floor(Math.random() * caracteres.length)));
    }

    // Embaralha a senha
    senhaArray.sort(() => Math.random() - 0.5);

    // Converte o array para string
    const senha = senhaArray.join('');
    
    return senha;
}



module.exports = gerarSenha;