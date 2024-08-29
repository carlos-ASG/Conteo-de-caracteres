function contarCaracteres(texto) {
    // Obtenemos la longitud de la cadena utilizando la propiedad length
    const numeroDeCaracteres = texto.length;
  
    // Mostramos el resultado en consola
    console.log("La cadena '" + texto + "' tiene " + numeroDeCaracteres + " caracteres.");
  }
  
  // Ejemplo de uso:
  const miCadena = "Hola, mundo!";
  contarCaracteres(miCadena);