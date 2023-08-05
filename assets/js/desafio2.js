
//desafio 2
function actualizarcontador (){
    let contador1 = +document.getElementById("inputsticker1").value;
    let contador2 = +document.getElementById("inputsticker2").value;
    let contador3 = +document.getElementById("inputsticker3").value;
    
    const resultotal = contador1 + contador2 + contador3;
    let user_resultador = document.getElementById("contadorsticker");
    
    if (resultotal <= 10){
        user_resultador.textContent = "llevas " + resultotal + " sticker";
    }else {
        user_resultador.textContent = "llevas demasiados esticker";
    }
}
document.getElementById("inputsticker1").addEventListener("change",actualizarcontador);
document.getElementById("inputsticker2").addEventListener("change",actualizarcontador);
document.getElementById("inputsticker3").addEventListener("change",actualizarcontador);
actualizarcontador();
