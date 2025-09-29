let estaLogado = true;
let temAssinatura = false; // Altere este valor para testar

// Combine as condições usando o operador lógico && dentro do if
if (estaLogado && temAssinatura) {
    console.log("Acesso Premium Liberado!");
} else {
    console.log("Acesso Negado. Verifique login e assinatura.");
}
