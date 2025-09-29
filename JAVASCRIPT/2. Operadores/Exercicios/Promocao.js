let assinatura_ativa = true
let primeira_compra = false
let consta_suspensa = true

let condicao1 = assinatura_ativa;
let condicao2 = primeira_compra && (!conta_suspensa);
let elegivel = condicao1 || condicao2;

console.log(elegivel)