const express = require ('express')
const app  = express()

app.get ('/', (req, res) => {
    res.send ('Servidor 1');
});

app.get ('/Registro', (req, res) => {
    res.send ('Este es el modulo de registro'); 
});

app.get ('/About', (req, res) => {
    res.send ('Este es el modulo acerca de mi'); 
});

app.listen(3000, () => {
    console.log('Servidor alojado en el puerto $(3000)')
});
