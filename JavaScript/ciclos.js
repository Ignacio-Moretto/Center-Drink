// Registro
function registro() {
  let nombre = prompt("¿Cual es tu nombre completo?");
  while(nombre === ""){
    nombre = prompt("¿Cual es tu nombre completo?");
  }

  alert("Bienvenido a Center Drink " + nombre + "!");
}
registro();


//Funciones

function listaProductos() {
let producto;
do {
  producto = parseInt(prompt("Que bebida deseas comprar?\n1) Absolute - Grape Fruit\n2) Absolute Pears\n3) Aboslute Regular\n4) Rutini\n5) Otro loco más\n6) Cordero con piel de lobo"));
}
while(producto < 1 || producto > 6)  

switch (producto) {
  case 1:
      return "Absolute - Grape Fruit";
  case 2:
    return "Absolute - Pears";
  case 3:
    return "Absolute - Regular";
  case 4:
    return "Rutini";
  case 5:
    return "Otro loco más";  
  case 6:
    return "Cordero con piel de lobo";    
}
}


function precio(producto) {
  if (producto === "Absolute - Grape Fruit"){
    return 2800;
  }
  else if (producto === "Absolute - Pears"){
    return 2800;
  }
  else if (producto === "Absolute - Regular"){
    return 2500;
  }
  else if (producto === "Rutini"){
    return 3500;
  }
  else if (producto === "Otro loco más"){
    return 2000;
  }
  else if (producto === "Cordero con piel de lobo"){
    return 2100;
  }
}

function pay(producto,precio){
  alert("Usted esta a punto de comprar"+ producto +"\nSu precio es: $"+ precio);
  let pago = prompt("¿Cómo desea pagar?\n1)Efectivo\n2)Transferencia\n3)Débito");
  switch(pago) {
    case "1":
      let efectivo = prompt("Seleccionaste Efectivo, ingresa el monto con el que vas a abonar el producto")
      if (efectivo > precio) {
        alert("Gracias por tu compra, tu vuelto es: $" + (efectivo - precio));
      }
      else if (efectivo == precio) {
        alert("Gracias por tu compra, pagaste con la cantidad justa de dinero");
      }
      else {
        alert("El monto con el que deseas pagar no es suficiente para realizar la compra.");
      }
      break;
    case "2":
      alert("Envia el pago al alias Center.Drink y envianos el comprobante de pago a travez de WhatsApp\nLuego de esto podes pasar a retirar tu producto por el local cuando lo desees.")
      break;
    case "3":
      let numCard = prompt("Ingresa el número de tu tarjeta de débito, no compartiremos estos datos con nadie.")
      alert("Tu tarjeta nº "+ numCard +"fue validada con exito, gracias por la compra y disfruta de tu producto. Recuerda beber con moderación.")
      break;
} 
}
let productoSeleccionado = listaProductos();
let productoPrecio = precio(productoSeleccionado);
pay(productoSeleccionado,productoPrecio);



