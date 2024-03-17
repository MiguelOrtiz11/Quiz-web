
  function validarInicioPalabra() {
    var palabra = document.getElementById("palabra").value;
    var regex = /^[A-Za-z0-9][A-Za-z0-9\s]*$/;
  
    if (regex.test(palabra)) {
      var primerCaracter = palabra.charAt(0);
      if (/^[A-Z]/.test(primerCaracter)) {
        alert("La palabra inicia con una letra mayúscula.");
      } else if (/^[a-z]/.test(primerCaracter)) {
        alert("La palabra inicia con una letra minúscula.");
      } else if (/^[0-9]/.test(primerCaracter)) {
        alert("La palabra inicia con un número.");
      }
    } else {
      alert("La palabra no cumple con el formato especificado.");
    }
  }
  