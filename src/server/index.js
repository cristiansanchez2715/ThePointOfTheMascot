const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require("mysql")

app.use(cors())


const port = 4000


const connection = mysql.createConnection({
    host: '127.0.0.1',
  user: 'root',
  password: 'spizamarillo2715',
  database: 'thepointofthemascot'
})

connection.connect((err) => {
    if (err) {
      console.error('Error de conexión a la base de datos:', err);
    } else {
      console.log('Conexión a la base de datos establecida');
    }
  });

app.listen(port, () => {
    console.log("server conectado")
})

app.get("/", (req, res) => {
    res.send("el servidor funciona men")
})


// ENVIANDO DONACIONES BASE DE DATOS

app.use(express.json());
const JSONParser = express.json();


app.post("/donaciones", JSONParser, (req, res) => {
const SQL = "INSERT INTO Donaciones(Marca, Gramaje, Tipo, Numero) VALUES (?, ?, ?, ?)  "
const {Marca, Gramaje, Tipo, Numero} = req.body
console.log(req.body)
connection.query(SQL, [Marca, Gramaje, Tipo, Numero], (error, results) => {
    if (error) {
      console.error('Error al insertar en la tabla Donaciones:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      console.log('Datos insertados correctamente en Donaciones');
      res.status(200).json({ success: true });
    }
  });

})



// TRAYENDO DONACIONES BASE DE DATOS }


app.get("/traerDonacion", (req, res) => {
    const SQL = 'SELECT * FROM Donaciones';  // Quité la coma adicional al final del SQL
    connection.query(SQL, (error, results) => {
      if (error) {
        console.error('Error al obtener datos de la tabla Donaciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        console.log('Datos obtenidos correctamente de la tabla Donaciones');
        res.status(200).json({ success: true, data: results });  // Enviando los datos al frontend
      }
    });
  });



// ENVIANDO ADOPCIONES BASE DE DATOS

app.post("/adopciones", JSONParser, (req, res) => {
  const SQL = "INSERT INTO Adopciones(Nombre, Edad, Raza, Contacto) VALUES (?, ?, ?, ?)  "
  const {Nombre, Edad, Raza, Contacto} = req.body
  console.log(req.body)
  connection.query(SQL, [Nombre, Edad, Raza, Contacto], (error, results) => {
      if (error) {
        console.error('Error al insertar en la tabla Adopciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        console.log('Datos insertados correctamente en Adopciones');
        res.status(200).json({ success: true });
      }
    });
  
  })
  
  
  
  // TRAYENDO ADOPCIONES BASE DE DATOS }
  
  
  app.get("/traerAdopcion", (req, res) => {
      const SQL = 'SELECT * FROM Adopciones';  // Quité la coma adicional al final del SQL
      connection.query(SQL, (error, results) => {
        if (error) {
          console.error('Error al obtener datos de la tabla Adopciones:', error);
          res.status(500).json({ error: 'Error interno del servidor' });
        } else {
          console.log('Datos obtenidos correctamente de la tabla Adopciones');
          res.status(200).json({ success: true, data: results });  // Enviando los datos al frontend
        }
      });
    });


