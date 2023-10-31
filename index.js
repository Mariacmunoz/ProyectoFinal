const express = require ('express')
const app  = express()

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

app.get ('/About', (req, res) => {
    res.send ('Este es el modulo acerca de mi'); 
});

app.listen(3000, () => {
    console.log('Servidor alojado en el puerto $(3000)')
});
