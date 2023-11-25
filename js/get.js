// Esta función realiza la solicitud para obtener el archivo CSV
async function obtenerDatosDesdeCSV(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return null;
  }
}

// URL pública del archivo CSV de Google Sheets
const url = 'https://docs.google.com/spreadsheets/d/1b9XfAsNG1a8wW_yz3DGu04GlXiXQwWe7Z09RVJccrHo/export?format=csv&id=1b9XfAsNG1a8wW_yz3DGu04GlXiXQwWe7Z09RVJccrHo&gid=0';

// Encuentra las columnas que contienen 'Usuario' y 'Contraseña' en el nombre
let columna_usuario = null;
let columna_contraseña = null;

// Aquí obtendrías los datos CSV y luego trabajarías con ellos
obtenerDatosDesdeCSV(url)
  .then(data => {
    if (data) {
      // Convertir el CSV a matriz de filas y columnas
      const filas = data.split('\n').map(row => row.split(','));

      // Obtener la primera fila que contiene los nombres de las columnas
      const encabezados = filas[0];

      // Encontrar las columnas de Usuario y Contraseña
      encabezados.forEach((columna, index) => {
        if (columna.includes('Usuario')) {
          columna_usuario = index;
        } else if (columna.includes('Contraseña')) {
          columna_contraseña = index;
        }
      });

      if (columna_usuario !== null && columna_contraseña !== null) {
        // Iterar sobre cada fila para obtener usuario y contraseña
        for (let i = 1; i < filas.length; i++) {
          const fila = filas[i];
          const usuario = fila[columna_usuario];
          const contraseña = fila[columna_contraseña];

          console.log(`Fila ${i} - Usuario: ${usuario}, Contraseña: ${contraseña}`);
        }
      } else {
        console.log("No se encontraron las columnas de usuario y/o contraseña.");
      }
    }
  });
