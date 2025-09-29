let vida_jogador = 50;
let dano_por_rodada = 8;
let rodada = 1;

// O loop continua enquanto a vida for maior que zero
while (vida_jogador > 0) {
    vida_jogador -= dano_por_rodada;

    // Garante que não imprimimos valores negativos de vida se o dano for maior que a vida restante
    let vida_atual = Math.max(0, vida_jogador);

    console.log(`Rodada ${rodada}: Dano recebido. Vida restante: ${vida_atual}`);
    rodada++;
}
console.log("Fim do jogo!");
