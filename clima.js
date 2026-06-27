function consultarClima(ciudad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ temperatura: "24°C", condicion: "Soleado" });
    }, 1500);
  });
}

const mostrarClima = async (ciudad) => {
  try {
    console.log(`Consultando el clima para ${ciudad}...`);
    const clima = await consultarClima(ciudad);
    console.log("\n☁️  Reporte del Clima en " + ciudad + ":");
    console.log(`   🌡️ Temperatura: ${clima.temperatura}`);
    console.log(`   🌤️ Condición: ${clima.condicion}`);
  } catch (error) {
    console.error("\n❌ Error al obtener el clima:", error);
  }
};

mostrarClima("Quito");
