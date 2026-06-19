//Validar nota de 0 a 10
let nota = 15;

do {
  console.log("Digite uma nota de 0 a 10: " + nota);
  nota = 7;
} while (nota < 0 || nota > 10);

console.log("Nota valida guardada: " + nota);
