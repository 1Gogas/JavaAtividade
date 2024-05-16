let ipNumero01 = document.querySelector("#ipNumero01");
let ipNumero02 = document.querySelector("#ipNumero02");
let h2titulo = document.querySelector("#H2titulo");
let btSubtrairnumero = document.querySelector("#btSubtrairnumero");

function subtrairnumero(){
    let numero = Number (ipNumero01.value);
    let numero2 = Number (ipNumero02.value);

    let subtrair = numero - numero2;

    h2titulo.textContent= subtrair; 
}

btSubtrairnumero.onclick= function(){
    subtrairnumero();
}