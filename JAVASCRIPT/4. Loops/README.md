# 4 Loops
Repete um bloco de código enquanto uma condição for verdadeira. 

## For
```Js
    for(let i = 0; i < 5; i++){
        console.log(i)
    }
```

Repete um bloco de código um número determinado de vezes. Entendemos a estrutura for a partir de: 
```js
for(Condicao Inicial; Condição de Parada; Passo){
    Codigo;
}
```


### Iteração sobre Arrays
Ideal para iterar sobre Arrays.

```Js
let nomes = ["Danilo", "João", "Isabela", "Julia"]
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}
```

```Js
let nomes = ["Danilo", "João", "Isabela", "Julia"]
for(let n of nomes){
    console.log(n)
}
```


## While

```Js
let contador = 0
while(contador < 10){
    console.log(contador)
}
```

## Do While
```Js
let dinheiro = 100
do{
    dinheiro -= 10
}while(dinheiro > 0)
```


## Exercicios

### Exercício 1: Contador e Decisão (Loop `for`)

**Objetivo:** Crie um arquivo chamado `Sorte.js` para usar o laço `for` para repetição de um número determinado de vezes e aplicar uma Estrutura de Controle de Fluxo (`if`) dentro do loop.

**Instruções:**

1.  Escreva um laço **`for`** que conte e itere de `1` até `10` (inclusive).
2.  Dentro do laço, use `console.log()` para imprimir o número da iteração.
3.  Adicione uma estrutura **`if`** dentro do laço: se o número atual for igual a `7`, imprima a mensagem `"Chegamos ao número da sorte!"`.


### Exercício 2: Repetição por Condição (Loop `while`)

**Objetivo:** Crie um arquivo chamado `Jogo.js` para usar o laço `while` para repetir um bloco de código enquanto uma condição de estado inicial permanecer verdadeira.

**Instruções:**

1.  Crie uma variável chamada **`vida_jogador`** e atribua o valor inicial `50`.
2.  Crie uma variável chamada **`dano_por_rodada`** e atribua o valor `8`.
3.  Escreva um laço **`while`** que execute o bloco de código **enquanto** `vida_jogador` for maior que `0`.
4.  Dentro do loop, diminua a `vida_jogador` pelo valor de `dano_por_rodada` (use um operador de atribuição combinado, como `-=`).
5.  Em cada repetição, use `console.log()` para mostrar a vida restante: `"Vida restante: [valor]"`.

### Exercício 3: Iteração e Formatação de Arrays (Loop `for...of`)

**Objetivo:** Crie um arquivo chamado `Produtos.js` para praticar a iteração direta sobre elementos de um **Array** usando o laço `for...of`.

**Instruções:**

1.  Crie um Array chamado **`lista_produtos`** com os seguintes nomes de produtos (strings): `"Teclado"`, `"Mouse"`, `"Monitor"`, `"Webcam"`.
2.  Escreva um laço **`for...of`** para percorrer **todos** os elementos do Array.
3.  Dentro do laço, use `console.log()` para imprimir a mensagem: `"Produto: [Nome do Produto]"`.