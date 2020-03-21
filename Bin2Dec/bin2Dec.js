function validaEntrada() {
    var txtbin = document.getElementById("txtbin").value
    if(txtbin.length == 0 || txtbin.length > 8) {
        alert(`"${txtbin}" não é um valor válido. Digite um número binário com até 8 caractéres.`)
    } else if (validaEntradaBinario(txtbin) == false) {
        alert(`"${txtbin}" não é um valor válido. Digite um número binário.`)        
    }
}

function validaEntradaBinario(txtbin) {
    var strNumero = txtbin
    var nrBinario = true
    for (var i = 0; i < strNumero.length; i++) {
        if (strNumero.charAt(i) != "0" && strNumero.charAt(i) != "1") {
            nrBinario = false
            break
        }
    }
    return nrBinario
}

function conversao() {

}

function mostraConversao() {
    validaEntrada()
}