let estoque_atual = 100;
let vendas_dia = 35;

estoque_atual -= vendas_dia; // 100 - 35 = 65

estoque_atual += 10; // 65 + 10 = 75

let produtos_por_caixa = 12;
let estoque_extra = estoque_atual % produtos_por_caixa;

console.log("Estoque Final:", estoque_atual);
console.log("Estoque Extra (Resto):", estoque_extra);
