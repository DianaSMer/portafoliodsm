function limpiar() {
    document.getElementById("calculadora").reset()

}

function calcular() {
   var x = parseInt(document.getElementById("valor1").value);
   var y = parseInt(document.getElementById("valor2").value);
   document.getElementById("resultado").innerHTML = (x-y)* 12 / 0.04;
}