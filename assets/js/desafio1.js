
//desafio 1 borde
let bordeimg = false;

//se crea la funcion de toogle 
function toggleBorder() {
    let image = document.getElementById("imgdesafio1");
    
    if (bordeimg === false) {
        image.classList.remove("clicked");
    } else {
        image.classList.add("clicked");
    }

    //evalua esta activado o desactivado el borde de la imagen haciendo clic en ella
    bordeimg = !bordeimg;
}


