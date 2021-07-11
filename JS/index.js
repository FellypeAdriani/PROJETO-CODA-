var nome = "Fellype Adriani";
var cargo = "CTO - GrowDev";

var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

var cargoHtml = document.getElementById("cargo-no-html");

function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;
}

function clickNoProjetos(){
    console.log("clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    console.log("clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarCargoNoHtml(cargo);