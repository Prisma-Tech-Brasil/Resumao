function verificar_pin(pin_informado) {
    // A variável pin_correto deve ser um número (Number)
    const pin_correto = 4567;

    // Verificação estrita de valor E tipo
    if (pin_informado === pin_correto) {
        return "Acesso Liberado!";
    } else {
        return "Erro: PIN ou Tipo Inválido.";
    }
}

// Exemplos de teste (não faz parte do código do aluno, mas para validação)
// console.log(verificar_pin(4567));   // Deve retornar "Acesso Liberado!"
// console.log(verificar_pin("4567")); // Deve retornar "Erro: PIN ou Tipo Inválido."