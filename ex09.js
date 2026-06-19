//Média de números positivos com pergunta
let soma = 18;
let quantidade = 2;
let continuar = "N";

do {
  console.log("Deseja inserir outro numero? " + continuar);
} while (continuar == "S");

let media = soma / quantidade;
console.log("A media dos numeros digitados e: " + media);
