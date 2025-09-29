
# 5. Funções

As funções são blocos de código reutilizáveis que podem receber **parâmetros** e retornar um **valor**.

## Declaração
```Js
function saudacao(nome) {
    return 'Olá, ' + nome;
}
```

## Chamada
```Js
let texto = saudacao("Lima")
```
A partir da chamada de conseguimos executar o código dentro da função.


## Arrow Functions

```Js
const somar = (a, b) => a + b;
```

Sintaxe mais concisa e moderna para declarar funções.


## Exercicios

Ótimo\! Agora que apresentamos as **funções**, podemos praticar a criação de blocos de código reutilizáveis.

Aqui estão 3 exercícios simples, focados na declaração e chamada de funções (incluindo *Arrow Functions*):

-----

### Exercício 1: Declaração de Função Padrão e Retorno

**Objetivo:** Criar um arquivo `Triplo.js` com uma função que recebe um valor, realiza um cálculo simples e retorna o resultado.

**Instruções:**

1.  Declare uma função chamada **`triplicarNumero`** que aceite um único **parâmetro** (`num`).
2.  Dentro da função, calcule e use a instrução **`return`** para devolver o valor do número multiplicado por **3**.
3.  Crie uma variável chamada **`resultado`** e chame a função, passando o número `7` como argumento.
4.  Imprima o valor da variável `resultado` no console.

### Exercício 2: Função com Lógica Interna e Múltiplos Parâmetros

**Objetivo:** Criar um arquivo `Maioridade.js` com a função que utiliza a **estrutura de controle de fluxo** (`if/else`) para determinar seu retorno, baseada em dois parâmetros.

**Instruções:**

1.  Declare uma função chamada **`checarMaioridade`** que aceite dois **parâmetros**: `idade` (número) e `idadeMinima` (número, use `18`).
2.  Dentro da função, use uma estrutura **`if/else`** para verificar se a `idade` é **maior ou igual** à `idadeMinima`.
3.  Se a condição for verdadeira, retorne a string `"É maior de idade."`.
4.  Caso contrário, retorne a string `"É menor de idade."`.
5.  Chame a função com um valor de sua escolha (ex: `17`) e imprima o valor retornado no console.

### Exercício 3: Sintaxe de Arrow Function (`=>`)

**Objetivo:** Crie um arquivo `Media.js` Praticar a sintaxe concisa e moderna das *Arrow Functions*.

**Instruções:**

1.  Declare uma **Arrow Function** chamada **`calcularMedia`**.
2.  A função deve aceitar **três parâmetros** (`n1`, `n2`, `n3`).
3.  A função deve calcular a média aritmética dos três números e **retornar** esse valor de forma concisa (em uma única linha, como no exemplo `somar`).
4.  Chame a função com os valores `10`, `20` e `30`, e imprima o resultado no console.


