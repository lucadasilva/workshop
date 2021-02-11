const express = require("express");

const app = express();

const cors = require("cors");

app.use(express.json());

app.listen(3000, () => {
  console.log("server listening");
});

app.use(cors());
var Usuarios = [];

var Suscripciones = [];

var Paquetes = [
  {
    ID: 0,
    Nombre: "Cordoba",
    Img:
      "https://images.unsplash.com/photo-1560654584-44c1c15fa953?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    Precio: 10000,
    Descripcion: "7 Noches c/desayuno",
  },
];

class User {
  constructor(ID, Nombre, Apellido) {
    this.ID = ID;
    this.Nombre = Nombre;
    this.Apellido = Apellido;
  }
}

class Package {
  constructor(ID, Nombre, Img, Precio, Descripcion) {
    this.ID = ID;
    this.Nombre = Nombre;
    this.Img = Img;
    this.Precio = Precio;
    this.Descripcion = Descripcion;
  }
}
class Suscription {
  constructor(ID, user, paquete) {
    this.ID = ID;
    this.user = user;
    this.paquete = paquete;
  }
}
// REGISTRO

app.post("/registro", function (req, res) {
  const user = new User(Usuarios.length, req.body.Nombre, req.body.Apellido);
  Usuarios.push(user);
  // res.send me envie el id del usuario para recibirlo en postUsuario de registro.js
  res.send({ message: "User Created", userID: user.ID });
});

// HOME

app.get("/home", function (req, res) {
  res.send(Paquetes);
});

app.post("/home", function (req, res) {
  const newSuscripcion = new Suscription(
    Suscripciones.length,
    req.body.user,
    req.body.package
  );
  Suscripciones.push(newSuscripcion);
  console.log(newSuscripcion);
  res.send("Suscription Successful");
});

// ADMIN

app.post("/admin", function (req, res) {
  const newPackage = new Package(
    Paquetes.length,
    req.body.Nombre,
    req.body.Img,
    req.body.Precio,
    req.body.Descripcion
  );
  Paquetes.push(newPackage);
  res.send("Paquete Creado");
});

app.put("/admin/:ID_Package", function (req, res) {
  let paqueteAModificar = Paquetes.find(
    (element) => element.ID == req.params.ID_Package
  );

  paqueteAModificar.Nombre = req.body.Nombre;
  paqueteAModificar.Img = req.body.Img;
  paqueteAModificar.Precio = req.body.Precio;
  paqueteAModificar.Descripcion = req.body.Descripcion;
  console.log(paqueteAModificar);
  return res.json(paqueteAModificar);
});

app.delete("/admin/:ID_Package", function (req, res) {
  let indexPaquete = Paquetes.findIndex(
    (element) => element.ID == req.params.ID_Package
  );
  let respuesta;
  if (indexPaquete == -1) {
    console.log(Paquetes);
    respuesta = {
      error: true,
      codigo: 501,
      mensaje: "El pais no ha sido creado",
    };
  } else {
    //Si hay un pais creado, lo eliminamos
    Paquetes.splice(indexPaquete, 1);
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "paquete eliminado",
    };
  }
  //Imrpimimos respuesta
  console.log(Paquetes);
  res.send(respuesta);
});
app.get("/admin/suscripciones", function (req, res) {
  res.send(Suscripciones);
});
app.get("/admin/paquetes", function (req, res) {
  res.send(Paquetes);
});
