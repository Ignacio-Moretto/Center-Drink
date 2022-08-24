let edad = parseInt(prompt("La venta de bebidas alcoholicas solo esta permitida a mayores de 18 años, ingresa tu edad para obtener acceso"));

while (edad < 18) {
  alert(
    "Eres menor de edad, no puedes comprar bebidas alcoholicas, vuelve con acompañado de una persona mayor de edad"
  );
  edad = parseInt(prompt("Hola de nuevo, ingresa tu edad"));
}

alert("Eres mayor de edad, tienes permitida la compra de bebidas alcoholicas, recuerda hacerlo con moderación")

