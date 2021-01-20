let btnResgistrar = document.querySelector("#registro");

let nombreValue = document.querySelector("#name").textContent;
let apellidoValue = document.querySelector("#lastname").nodeValue;

btnResgistrar.addEventListener("click", () =>
  sessionStorage.setItem(
    "usuarioID",
    postUsuario(nombreValue, apellidoValue).userID
  )
);

async function postUsuario(nombre, apellido) {
  let request = await fetch("http://localhost:3000/registro", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    body: JSON.stringify({
      Nombre: `${nombre}`,
      Apellido: `${apellido}`,
    }),
  });
  console.log(request);
  //   reciba y retorne el id del usuario al momento de registrase para
  // que en btnRegistrar cree un sessionstorage con el id y poder utilizarlo despues
  //  para el momento de la compra en postComprar en home.js
  return request;
}
