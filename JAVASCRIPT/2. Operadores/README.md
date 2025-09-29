# 2. Operadores

Os operadores são os simbolos essencias para o funcionamento de um programa. Dentre eles, cada um tem sua propria função dentro do código, entre os principais operadores temos:

## Atribuição 
Armazenam valores (`=`, `+=`, `-=`)

```Js
let x = 10
x += 5 // Incrementa o valor em 5
```

Além dos operadores `+=` e `-=`, temos também `++` e `--` incrementar e decrementar em 1 o valor de uma variavel, esses serão bem comuns ao trabalhar-mos com as estruturas de [Loops](/JAVASCRIPT/Loops/README.md)

## Aritméticos
Realizam operações matemáticas (`+`, `-`, `*`, `/`, `%`). 

```Js
let soma = 5 + 3
```

```Js
let x = 10
let y = 20
let z = (y - x) * 2
```

## Comparação

Compararam valores, retornando um booleano (`true` ou `false`).

```Js
let x = 5
let y = 10

let maior = x > y // maior vai ser falso
```

Dos principais operadores temos:
1. Maior `>`
2. Maior ou Igual `>=`
3. Menor `<`
4. Menor ou Igual `<=`
5. Igual `==`
6. Estritamente Igual `===`

```Js
2 == "2" // Verdadeiro
2 === "2" // Falso
```

## Lógicos

Combinam expressões booleanas 
1. `&&` (E)
2. `\|\|` (OU)
3. `!` (Negação/Inversor)

```Js
let x = 10
let y = 5
let z = 0

(x > y && z > y) // Falso
(x > y || z > y) // Verdadeiro
(!(y > x)) // Verdadeiro
```


## Exercicios

### Exercício 1: Manipulação de Variáveis e Operadores Aritméticos/Atribuição

**Objetivo:** Criar um arquivo `Estoque.js` que gerencie o estoque de um produto, aplicando operações de atribuição e aritméticas.

**Instruções:**

1.  Crie uma variável chamada `estoque_atual` e atribua o valor inicial de `100`.
2.  Crie uma variável chamada `vendas_dia` e atribua o valor de `35`.
3.  Utilize um operador de atribuição combinado (`-=`) para diminuir o `estoque_atual` pelo valor de `vendas_dia`.
4.  O gerente decide adicionar **10** novas unidades ao estoque. Utilize o operador de incremento (`++` ou `+= 1`) **dez vezes** ou o operador de atribuição combinado (`+= 10`) para realizar esta adição.
5.  Crie uma variável chamada `produtos_por_caixa` e atribua o valor `12`.
6.  Calcule quantos produtos "sobraram" fora das caixas completas (ou seja, o resto da divisão) e armazene este valor em uma nova variável chamada `estoque_extra`.
7.  Imprima no console o valor final de `estoque_atual` e de `estoque_extra`.


-----

### Exercício 2: Condicional Simples com Operadores de Comparação Estrita

**Objetivo:** Criar um arquivo `Acesso.js` que valide um dado de entrada garantindo que o tipo e o valor sejam os esperados, utilizando o operador de igualdade estrita (`===`).

**Instruções:**

1.  Crie duas variaveis `pin_informado` e `pin_correto`.
2.  Defina a variável `pin_correto` com o valor numérico `4567`.
3.  O argumento `pin_informado` será o valor que o usuário digitou, que pode ser uma *string* ou um *number*.
4.  Utilize uma estrutura `if/else` e o operador **estritamente igual (`===`)** para verificar se o `pin_informado` é idêntico (valor e tipo) ao `pin_correto`.
5.  Se a condição for verdadeira, deve retornar a mensagem: `"Acesso Liberado!"`.
6.  Se a condição for falsa, deve retornar: `"Erro: PIN ou Tipo Inválido."`.


-----

### Exercício 3: Lógica Complexa com Operadores Lógicos

**Objetivo:** Criar um arquivo `Promocao.js` que determine a elegibilidade para uma promoção combinando múltiplas condições usando os operadores lógicos (`&&`, `||`, `!`).

**Instruções:**

1.  Crie 3 variaveis booleanas
      * `assinatura_ativa` (Ex: `true` se tem)
      * `primeira_compra` (Ex: `true` se é a primeira)
      * `conta_suspensa` (Ex: `true` se estiver suspensa)
2.  Crie um codigo que valide uma promoção quando a pessoa for elegivel. Uma pessoa é elegível se:
      * Ela tem uma `assinatura_ativa` **OU**
      * (Ela está fazendo a `primeira_compra` **E** a sua `conta_suspensa` **NÃO** é verdadeira)
3.  Utilize a combinação de operadores `&&`, `||`, e `!` para expressar essa lógica e armazene o resultado em uma variável `elegivel`.
4.  Imprima o valor booleano de `elegivel`, substitua os valores das variaveis iniciais.