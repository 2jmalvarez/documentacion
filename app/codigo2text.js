const fs = require("fs");
const path = require("path");

function leerArchivosEnCarpetas(carpetas, archivoDestino) {
  for (const carpeta of carpetas) {
    const rutaCarpeta = path.resolve(carpeta);

    if (fs.existsSync(rutaCarpeta)) {
      const archivos = fs.readdirSync(rutaCarpeta);

      for (const archivo of archivos) {
        const rutaArchivo = path.join(rutaCarpeta, archivo);
        const stats = fs.statSync(rutaArchivo);

        if (stats.isDirectory()) {
          leerArchivosEnCarpetas([rutaArchivo], archivoDestino);
        } else if (stats.isFile()) {
          const contenido = fs.readFileSync(rutaArchivo, "utf8");
          fs.appendFileSync(
            archivoDestino,
            `--------------------------------Inicio ${rutaArchivo}-------------------------------------
            ${contenido}
            --------------------------------Fin ${rutaArchivo}-------------------------------------
            `
          );
        }
      }
    }
  }
}

// Uso de la función
const carpetas = ["api-epsilon", "react-epsilon"]; // Agrega las rutas de las carpetas que deseas leer
const archivoDestino = "codigo fuente.txt"; // Ruta y nombre del archivo de destino

leerArchivosEnCarpetas(carpetas, archivoDestino);
console.log("Proceso completado.");
