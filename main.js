let valoresTabela = []

function valorRepetido(num) {
    if(valoresTabela.indexOf(num) == -1) {
        return false
    } else {
        return true
    }
}

function entradaValida(){
    let entradaValida
    let txtnum = document.getElementById("txtnum").value
    let num = parseInt(txtnum)
    if(txtnum.length > 0 && num >= 1 && num <= 100 && valorRepetido(num) == false) {
        entradaValida = true
    } else {
        entradaValida = false
        alert("Valor repetido ou inválido. Corrija-o para prosseguir.")
    }
    return entradaValida
}

function adcValor() {
    let num = Number(document.getElementById("txtnum").value)
    if(entradaValida()) {
        let tabela = document.getElementById("seltab")
        itemTab = document.createElement("option")
        itemTab.text = `Valor ${num} adicionado`
        itemTab.value = `tab${num}`
        tabela.appendChild(itemTab)
        limpaRes()
        valoresTabela.push(num)
    }
    document.getElementById("txtnum").value=""
    document.getElementById("txtnum").focus()
}

function geraEstatisticas() {
    if(valoresTabela.length > 0) {
        let result = document.getElementById("result")
        valoresTabela.sort(function(a,b){return a-b})
        let somaValoresTabela = 0
        for(i=0; i<valoresTabela.length; i++) {
            somaValoresTabela+=valoresTabela[i]
        }
        result.innerHTML=`Ao todo, temos ${valoresTabela.length} números cadastrados.<br>`
        result.innerHTML+=`O maior valor informado foi ${valoresTabela[valoresTabela.length-1]}.<br>`
        result.innerHTML+=`O menor valor informado foi ${valoresTabela[0]}.<br>`
        result.innerHTML+=`Somando todos os valores, temos ${somaValoresTabela}.<br>`
        result.innerHTML+=`A média dos valores digitados é ${somaValoresTabela/valoresTabela.length}.`
    } else {
        alert("Inclua valores antes de gerar as estatísticas.")
    }
}

function limpaRes() {
    let result = document.getElementById("result")
    result.innerHTML = `Aguardando gerar estatísticas...`
}