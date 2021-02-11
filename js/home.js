class Product {
  constructor(city, price, image, description) {
    this.city = city;
    this.price = price;
    this.image = image;
    this.description = description;
  }
  // si agrego los productos a mano debo chequear que no se repitan los sku
}
let productos = [
  new Product(
    "Río de Janeiro",
    "$35000",
    "https://www.costacruceros.es/content/dam/costa/costa-magazine/article-images/what-to-see-in-rio-de-janeiro/rio-de-janeiro-panorama_YuJas-Shutterstock_1.jpg.image.1296.974.high.jpg",
    "Río es una ciudad única, llena de hermosas playas"
  ),
];

let listProducts = document.getElementById("products");

let appendChildren = (parent, children) => {
  children.forEach((element) => {
    parent.appendChild(element);
  });
};

let displayProducts = (products) => {
  for (let i = 0; i < products.length; i++) {
    let card = document.createElement("div");
    let nombre = document.createElement("h3");
    let precio = document.createElement("h4");
    let img = document.createElement("img");
    let descripcion = document.createElement("p");
    let btnComprar = document.createElement("button");

    nombre.className = "ciudad";
    precio.id = "precio";
    img.className = "imagenPaquete";
    descripcion.id = "description";
    btnComprar.id = "compra";

    nombre.textContent = products[i].Nombre;
    precio.textContent = products[i].Precio;
    img.src = products[i].Img;
    descripcion.textContent = products[i].Descripcion;
    btnComprar.textContent = "Comprar";
    btnComprar.addEventListener("click", () => postComprar(products[i]));
    listProducts.appendChild(card);
    appendChildren(card, [nombre, precio, img, descripcion, btnComprar]);
  }
};

async function getProducts() {
  let response = await fetch("http://localhost:3000/home");
  console.log(response);
  let data = await response.json();
  console.log(data);

  return data;
}

async function postComprar(paquete) {
  let request = await fetch("http://localhost:3000/home", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    body: JSON.stringify({
      // user deberia tomar el valor de userID del sessionStorage
      user: "yo",
      package: `${paquete.ID}`,
    }),
  });
  console.log(request);
}

getProducts().then(displayProducts);
