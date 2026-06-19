//Fatorial de um número
let numero = 5;
let fatorial = 1;

for (let i = numero; i >= 1; i--) {
  fatorial = fatorial * i;
}

console.log("O fatorial de " + numero + " e: " + fatorial);
