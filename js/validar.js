document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
  
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  // URL pública del nuevo archivo CSV de Google Sheets
  const url = 'https://docs.google.com/spreadsheets/d/1XsqQcQt7kxX1yg66t04_bXboBYqAMp5g7BrN-vk46Cg/edit?usp=sharing';

  try {
      const response = await fetch(url);
      const data = await response.text();

      if (data) {
          // Convertir el CSV a matriz de filas y columnas
          const filas = data.split('\n').map(row => row.split(','));

          let credencialesCorrectas = false;

          // Iterar sobre cada fila para obtener usuario y contraseña
          for (let i = 0; i < filas.length; i++) {
              const fila = filas[i];
              const usuario = fila[0]; // El nombre de usuario está en la primera columna (0-index)
              const contraseña = fila[1]; // La contraseña está en la segunda columna (0-index)

              if (usuario === usernameInput && contraseña === passwordInput) {
                  credencialesCorrectas = true;
                  break;
              }
          }

          if (credencialesCorrectas) {
              console.log('¡Acceso concedido! Redirigiendo...');
              window.location.href = 'index.html';
          } else {
              console.log('Credenciales incorrectas. Inténtalo de nuevo.');
          }
      }
  } catch (error) {
      console.error('Error al obtener los datos:', error);
  }
});