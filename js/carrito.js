document.addEventListener("DOMContentLoaded", function () {
    const botonesComprar = document.querySelectorAll(".agregar-carrito"); // Seleccionar todos los botones "Comprar"
    let contadorValue = 0; // Inicializar el contador del carrito en 0

    botonesComprar.forEach((boton) => {
        boton.addEventListener("click", function () {
            contadorValue += 1; // Incrementar el contador en 1 cada vez que se hace clic en un botón "Comprar"
            document.getElementById("contador").value = contadorValue; // Actualizar el valor del carrito en el input
        });
    });
});

  
  