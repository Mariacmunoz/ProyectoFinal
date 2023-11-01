const express = require ('express')
const bodyParser = require('body-parser');
const pool = require('./db');
const app  = express()
app.use(bodyParser.json());

app.get ('/', (req, res) => {
    res.send ('Servidor 1');
});

app.get ('/Registro', (req, res) => {
    res.send ('Este es el modulo de registro');

    document.getElementById("registration-form").addEventListener("submit", function (e) {
        e.preventDefault();
      
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
      
        // Verificar si el usuario ya existe en localStorage
        if (localStorage.getItem(username)) {
          alert("El nombre de usuario ya está en uso.");
        } else {
          // Almacenar el registro en localStorage
          localStorage.setItem(username, JSON.stringify({ email, password }));
          alert("Registro exitoso. Ahora puedes iniciar sesión.");
        }
      
        // Limpia los campos del formulario
        this.reset();
      });
      
});

app.put('/usuario-inmobiliario/:username', async (req, res) => {
  const username = req.params.username; 
  const { nombre, descripcion, añosExperiencia, proyectosRealizados } = req.body;

  try {
    // Validaciones
    if (!nombre || !descripcion || isNaN(añosExperiencia) || isNaN(proyectosRealizados)) {
      res.status(400).json({ error: 'Los datos proporcionados son inválidos.' });
      return;
    }
    if (añosExperiencia < 0 || añosExperiencia > 100) {
      res.status(400).json({ error: 'El valor de años de experiencia debe estar entre 0 y 100.' });
      return;
    }
    
    if (proyectosRealizados < 0 || proyectosRealizados > 1000) {
      res.status(400).json({ error: 'El valor de proyectos realizados debe estar entre 0 y 1000.' });
      return;
    }
    // Actualiza el perfil del usuario inmobiliario en la base de datos
    const updateQuery = "\n      UPDATE usuarios_inmobiliarios\n      SET nombre = $1, descripcion = $2, años_experiencia = $3, proyectos_realizados = $4\n      WHERE username = $5\n    ";
    await pool.query(updateQuery, [nombre, descripcion, añosExperiencia, proyectosRealizados, username]);

    res.status(200).json({ mensaje: 'Perfil actualizado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el perfil' });
  }
});

app.get ('/About', (req, res) => {
    res.send ('Este es el modulo acerca de mi'); 
});

app.listen(3000, () => {
    console.log('Servidor alojado en el puerto $(3000)')
});
