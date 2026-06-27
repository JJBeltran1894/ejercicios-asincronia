function verificarEdad(edad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (edad >= 18) {
        resolve("Acceso concedido. Bienvenido a la plataforma");
      } else {
        reject("Acceso denegado. Registro permitido solo para mayores de edad");
      }
    }, 1000);
  });
}

verificarEdad(17)
  .then((resultado) => {
    console.log(`Resultado de la validación: ${resultado}`);
  })
  .catch((error) => {
    console.log(`Problema con la validación: ${error}`);
  });

verificarEdad(25)
  .then((resultado) => {
    console.log(`Resultado de la validación: ${resultado}`);
  })
  .catch((error) => {
    console.log(`Problema con la validación: ${error}`);
  });
