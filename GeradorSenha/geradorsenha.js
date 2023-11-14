function gerarSenha() {
    var length = 9,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&",
        retVal = "";
    var upperCaseChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    var lowerCaseChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    var specialChar = "@#$%&".charAt(Math.floor(Math.random() * 5));
    var numberChar1 = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    var numberChar2 = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    var passwordPrefix = upperCaseChar + lowerCaseChar + specialChar + numberChar1 + numberChar2;
    for (var i = 0, n = charset.length; i < length - 5; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    retVal = passwordPrefix + retVal;
    return retVal;
}



module.exports = gerarSenha;