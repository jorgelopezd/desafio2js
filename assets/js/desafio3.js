function verificadorpassword(){
    const password1 = "911";
    const password2 = "714"

    const select1 = document.getElementById("select1").value;
    const select2 = document.getElementById("select2").value;
    const select3 = document.getElementById("select3").value;

    const password = select1 + select2 + select3;

    const resultado = document.getElementById("resultado");

    if (password === password1){
        resultado.textContent = "password 1 correcto";
    }else if (password === password2){
        resultado.textContent = "password 2 correcto";
    }else{
        resultado.textContent = "password incorrecto"
    }
}