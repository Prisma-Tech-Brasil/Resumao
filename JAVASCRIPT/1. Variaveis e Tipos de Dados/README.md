# **1. Variáveis e Tipos de Dados**

## Variaveis

As **Variáveis** são um conceito dentro da programação de uma estrutura que serve para armazenar valores.

Dentro do Javascript, declaramos uma variável com o uso dos termos `let` (mutável) e `const` (constante, imutável)

```js
const nome = 'Danilo'
let idade = 24
```
## Tipos Primitivos de Dados

De forma geral, as linguagens de programação conseguem armazenar uma série de tipos de dados, desde mais simples a mais complexos. Dentre os principais que precisamos aprender temos:

### Number (números)
```Js
let idade = 24
let saldo = 64.90
```
Note que diferente da notação em português, nao utilizamos a `',' (virgula)`, mas sim `'.' (ponto)` para separação das casas decimais 

Além disso é importante ressaltar que dentro do javascript, diferente de outras linguagens, não temos uma distinção de tipo dentro numeros inteiros (int), reais (float)

### String (texto)
```Js
let nome = "Danilo"
let profissão = 'Educador'
let frase = " Eu acredito que às vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar. - Alan Turing"
```

Estruturas de texto em `JS` precisam ser registradas com `' (aspas simples)` ou `" (aspas duplas)`, além disso podem armazenar multiplas palavras.


### Boolean (verdadeiro/falso)
```Js
let acordado = true
let  = false
```


### Arrays (Listas)
```Js
const cores = ['vermelho', 'azul', 'verde'];
const notas = [8.6, 7, 4.8]
```
Listas ordenadas de valores

Os elementos de um array podem ser acessados por meio de sua posição, é importante ressaltar que os Arrays começam a partir da posição `0 (zero)`

```Js
const frutas = ["Banana","Uva", "Pera", "Maça"]
let favorita = frutas[1] // Armazenar Uva
```

Outro recurso importante é a propriedade `length`, por meio dela podemos acessar a quantidade de elementos de um array.

```Js
const notas = [10, 8, 6, 7]
let quantidade = notas.length
```


### Objetos 

(`true` ou `false`), `null`, e `undefined`. | `let ativo = true;` <br> `let preco = 99.99;` |
| **Arrays** | Listas ordenadas de valores. | `const cores = ['vermelho', 'azul', 'verde'];` |
| **Objetos** | Coleções de pares chave-valor, usadas para representar entidades complexas. | `const pessoa = { nome: 'Bob', idade: 25 };` |

## EXERCICIO

### Exercicio 1
Crie um programa chamado `variaveis.js`, em que voce deve declarar 4 variaveis: seu nome, sua idade, se você é casado e sua profissão dos sonhos.

### Exercicio 2
Crie um programa chamado `arrays.js`, em que voce deve criar 3 arrays, um contendo sua lista de filmes favoritos, outro contendo sua data de nascimento (no formato [dia, mes, ano]), 