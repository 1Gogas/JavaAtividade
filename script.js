let ipNumero = document.querySelector("#ipNumero");
let ipNumero2 = document.querySelector("#ipNumero2")
let h2Titulo = document.querySelector("#h2Titulo");
let btSomarnumero = document.querySelector("#btSomarnumero");

function somarnumero(){
    let numero = Number (ipNumero.value);
    let numero2 =Number (ipNumero2.value);

    let soma = numero + numero2;

    h2Titulo.textContent= soma;



} 

btSomarnumero.onclick = function(){
    somarnumero();
}