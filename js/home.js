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

let displayProducts = (products) => {
  for (let i = 0; i < products.length; i++) {
    let card = document.createElement("div");
    card.innerHTML =
      "<h3>" +
      products[i].city +
      "</h3>" +
      "<h4>" +
      products[i].price +
      "</h4>" +
      '<img src="' +
      products[i].image +
      '">' +
      "<p>" +
      products[i].description +
      "</p>" +
      "<button>Comprar paquete</button>";
    listProducts.appendChild(card);
  }
};

/*async function getProducts() 
{
  let response = await fetch(`localhost/3000/`);
  let data = await response.json()
  return data;
}*/

async function getProducts() {
  let response = await fetch("http://localhost:3000/home", {
    method: "GET",
    mode: "no-cors",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  });
  console.log(response);
  let data = await response.json();
  console.log(data);

  //   let data = await (
  //     await fetch("http://localhost:3000/home", {
  //       method: "GET",
  //       mode: "no-cors",
  //     })
  //   ).json();
  return data;
}

productos = getProducts();

displayProducts(productos);
