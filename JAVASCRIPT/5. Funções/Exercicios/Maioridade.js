
// 1. Declaração da Função com Lógica
function checarMaiorIdade(idade, idadeMinima) {
    if (idade >= idadeMinima) {
        return "É maior de idade.";
    } else {
        return "É menor de idade.";
    }
}

// 5. Chamada da Função
let status1 = checarMaiorIdade(25, 18);
let status2 = checarMaiorIdade(15, 18);

console.log("Idade 25:", status1); // Deve imprimir "É maior de idade."
console.log("Idade 15:", status2); // Deve imprimir "É menor de idade."
