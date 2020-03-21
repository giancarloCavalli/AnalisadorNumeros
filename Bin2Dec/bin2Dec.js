function validaEntrada(txtbin) {
    var entradaValida;
    this.txtbin = txtbin
    if(txtbin.length == 0 || txtbin.length > 8) {
        alert(`"${txtbin}" não é um valor válido. Digite um número binário com até 8 caractéres.`)
        entradaValida = false
    } else if (validaEntradaBinario(txtbin) == false) {
        alert(`"${txtbin}" não é um valor válido. Digite um número binário.`)
        entradaValida = false
    } else {
        entradaValida = true
    }
    return entradaValida
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

function conversao(txtbin) {
    var nrDecimal = parseInt(txtbin, 2)
    return nrDecimal
}

function mostraConversao() {
    var txtbin = document.getElementById("txtbin").value
    var result = document.getElementById("result")
    if (validaEntrada(txtbin)) {
        result.setAttribute("value",`${conversao(txtbin)}`)
    }
}

function limpaResult() {
    var result = document.getElementById("result")
    result.setAttribute("value","")
}