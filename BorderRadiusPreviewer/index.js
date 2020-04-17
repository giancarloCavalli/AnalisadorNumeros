var box = document.getElementById("shape")

lefTop = 80

function setBorderRadius() {
    var lefTop = document.getElementById("leftTop").value
    var topRig = document.getElementById("topRight").value
    var rigBot = document.getElementById("rightBottom").value
    var botLef = document.getElementById("bottomLeft").value
    res = document.getElementById("result")
    box.style.borderRadius = `${lefTop}% ${topRig}% ${rigBot}% ${botLef}%`
    res.innerText = `${lefTop}% ${topRig}% ${rigBot}% ${botLef}%`
}

function copyTCB() {
    const txt = document.createElement("textarea")
    txt.value = res.innerText
    document.body.appendChild(txt)
    txt.select()
    document.execCommand('copy')
    document.body.removeChild(txt);
}
