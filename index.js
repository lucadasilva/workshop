const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("server listening");
});

var Usuarios = [];

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

// REGISTRO

app.post("/registro", function (req, res) {
  const user = new User(Usuarios.length, req.body.Nombre, req.body.Apellido);
  Usuarios.push(user);
  res.send("User Created");
});

// HOME

app.get("/home", function (req, res) {
  res.send(Paquetes);
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
