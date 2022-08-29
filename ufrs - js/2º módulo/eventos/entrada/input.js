/* onBlur: Quando sai do campo
onChange: Quando muda o conteúdo do campo
onFocus: Quando entra no campo
onSelect: Quando um texto é selecionado
onSubmit: Quando um texto é submetido
onReset: quando o botão de reset é clicado
onKeyDown: quando pressionada a tecla
onKeyUp: quando solta a tecla pressionada */

function submeti(){
    document.getElementById("log").innerHTML += "submeti<br>";
    return false;
}

function resetei(){
    document.getElementById("log").innerHTML += "resetei<br>";
}

function saidocampo(){
    document.getElementById("log").innerHTML +="sai do campo<br>";
}

function mudei(){
    document.getElementById("log").innerHTML +="mudei<br>";
}

function entreinocampo(){
    document.getElementById("log").innerHTML +="entrei no campo<br>";
}

function selecionei(){
    document.getElementById("log").innerHTML +="selecionei<br>";
}

function teclabaixo(){
    document.getElementById("log").innerHTML +="teclabaixo<br>";
}

function teclacima(){
    document.getElementById("log").innerHTML +="teclacima<br>";
}