const retirarDinero = (monto) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const saldoDisponible = 500;
      if (monto <= saldoDisponible) {
        const saldoRestante = saldoDisponible - monto;
        resolve(
          `Retiro Exitoso de $${monto}. Saldo restante: $${saldoRestante}`,
        );
      } else {
        reject(`Fondos insuficientes. Limite de retiro: $${saldoDisponible}`);
      }
    }, 1500);
  });
};

retirarDinero(200)
  .then((resultado) => {
    console.log("Prueba ejecucion valida");
    console.log("Iniciando retiro de dinero...");
    console.log("Respuesta del cajero: " + resultado);
  })
  .catch((error) => {
    console.log("Prueba ejecucion invalida");
    console.log("Alerta del cajero: " + error);
  });

retirarDinero(600)
  .then((resultado) => {
    console.log("Prueba ejecucion valida");
    console.log("Iniciando retiro de dinero...");
    console.log("Respuesta del cajero: " + resultado);
  })
  .catch((error) => {
    console.log("Prueba ejecucion invalida");
    console.log("Alerta del cajero: " + error);
  });
