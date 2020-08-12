function validar() {
    var nombre = document.getElementById("usuario").value;

    var password = document.getElementById("password").value;

    var espacio = false;
    

    if (nombre == "guillermo" && password == "123456") {

        alert("Los datos son correctos");

        espacio = true;

    } else {
        alerta("los datos son incorrecto");

    }
}