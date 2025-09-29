# 3. Condicionais

Executa blocos de código diferentes com base em uma condição booleana.

## If / Else
```Js
let numero = 5
if(numero > 0){
    console.log("Numero é positivo")
}else if(numero < 0){
    console.log("Numero é negativo")
}else{
    console.log("Zero")
}

```

## Exercicios
### Exercício 1: Classificação Simples com If / Else (Votação)

**Objetivo:** Crie um arquivo `Votacao.js` Praticar a decisão binária (`true` ou `false`) usando `if` e `else` diretamente no script.

**Instruções:**

1.  Crie uma variável chamada **`idade`** e atribua a ela um valor numérico (ex: `15` ou `20`).
2.  Use a estrutura **`if / else`** para verificar se a pessoa tem **16 anos ou mais** (idade mínima para votar no Brasil).
3.  Utilize `console.log()` para imprimir a mensagem apropriada:
      * Se puder votar: `"Pode votar!"`
      * Caso contrário: `"Não pode votar ainda."`


### Exercício 2: Múltiplas Classificações com If / Else If / Else (Notas)

**Objetivo:** Crie um arquivo `Notas.js` para praticar o encadeamento de condições (`if`, `else if`, `else`) para cobrir múltiplos cenários.

**Instruções:**

1.  Crie uma variável chamada **`nota_aluno`** e atribua a ela um valor numérico entre 0 e 100.
2.  Use a estrutura **`if / else if / else`** para classificar e imprimir o **Conceito** da nota de acordo com as seguintes regras:
      * Se a nota for **maior ou igual a 90**: imprima `"Conceito A"`.
      * Se a nota for **maior ou igual a 70 E menor que 90**: imprima `"Conceito B"`.
      * Se a nota for **menor que 70**: imprima `"Conceito C"`.


### Exercício 3: Controle de Acesso com Condições Lógicas Compostas

**Objetivo:** Crie um arquivo chamado `Login.js` para praticar o uso de **operadores lógicos (`&&` ou `||`)** em conjunto com a estrutura de controle (`if / else`).

**Instruções:**

1.  Crie duas variáveis booleanas: **`estaLogado`** e **`temAssinatura`**, e atribua a elas valores `true` ou `false` de sua escolha.
2.  Use o operador lógico **`&&` (E)** para combinar as duas variáveis dentro do seu `if`.
3.  O acesso Premium **só** deve ser liberado se **ambas** as variáveis forem `true`.
4.  Utilize `console.log()` para imprimir a mensagem apropriada:
      * Se a condição for verdadeira: `"Acesso Premium Liberado!"`
      * Caso contrário: `"Acesso Negado. Verifique login e assinatura."`

