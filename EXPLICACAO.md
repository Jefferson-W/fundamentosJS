# Revisão de JavaScript — Guia dos Exercícios

Documentação de todos os arquivos do projeto, em ordem progressiva de complexidade.

---

## ex001.js — Saída no Terminal

**Conceito:** `console.log`

O ponto de partida. Mostra como imprimir texto e expressões matemáticas no terminal.

```js
console.log('Hello, World!')  // imprime texto
console.log(2 + 2)            // imprime o resultado de uma expressão
```

**Como executar:** `node ex001.js`

---

## ex002.js — Variáveis

**Conceito:** `let`, `const`, tipos de dados

Introduz as palavras-chave para declarar variáveis e os tipos primitivos do JavaScript.

| Palavra-chave | Uso |
|---|---|
| `let` | variável que pode ser reatribuída |
| `const` | constante, valor não muda após a atribuição |

**Tipos de dados mencionados:** `String`, `Number`, `Boolean`, `Array`, `Object`

```js
let nome = 'Jefferson'          // String
let nomeDoCurso = 'IA Generativa...'
```

---

## ex003.js — Condicionais

**Conceito:** `if / else`

Ensina a tomar decisões no código com base em uma condição.

```js
if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}
```

**Fluxo:** a condição dentro do `if` é avaliada; se verdadeira, o primeiro bloco executa; caso contrário, o `else` executa.

---

## ex004.js — Laços de Repetição

**Conceito:** `while`, `for`

Dois tipos de loop para repetir blocos de código.

| Loop | Quando usar |
|---|---|
| `while` | quando não sabe quantas vezes vai repetir |
| `for` | quando sabe exatamente o número de iterações |

```js
while (n < 10) { n++ }          // repete enquanto n for menor que 10
for (let i = 0; i < 5; i++) {}  // repete exatamente 5 vezes
```

---

## ex005.js — Listas (Arrays)

**Conceito:** `Array` e seus métodos

Apresenta como criar e manipular listas de valores.

| Operação | Código | Resultado |
|---|---|---|
| Acessar elemento | `numeros[0]` | primeiro item |
| Último elemento | `numeros[numeros.length - 1]` | último item |
| Adicionar no final | `frutas.push('abacaxi')` | insere ao final |
| Remover do final | `frutas.pop()` | remove o último |

```js
let numeros = [1, 2, 3, 4, 5]
console.log(numeros.length)  // 5
```

---

## ex006.js — Objetos

**Conceito:** `Object`

Objetos agrupam propriedades relacionadas em uma única estrutura com pares `chave: valor`.

```js
let pessoa = {
    nome: 'Jefferson',
    idade: 30,
    profissao: 'Desenvolvedor'
}

console.log(pessoa.nome)  // acessa uma propriedade
pessoa.idade = 31          // modifica uma propriedade
```

**Diferença para Array:** arrays usam índices numéricos (`[0]`); objetos usam nomes (`pessoa.nome`).

---

## ex007.js — forEach

**Conceito:** `forEach` vs `for` clássico

Compara dois jeitos de percorrer um array: o loop `for` tradicional e o método `.forEach()`.

```js
// Modo clássico
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

// Modo moderno com forEach
numeros.forEach(function(numero) {
    console.log(numero)
})
```

**Vantagem do `forEach`:** código mais curto e legível, sem gerenciar a variável de índice manualmente.

---

## ex008.js — Entrada do Usuário (readline)

**Conceito:** módulo `readline`, `async/await`, `import`

Primeiro exercício interativo: recebe dados digitados pelo usuário no terminal.

```js
import readline from 'readline/promises'

const rl = readline.createInterface({
    input: process.stdin,   // lê do teclado
    output: process.stdout  // escreve no terminal
})

let nome = await rl.question('Qual é o seu nome? ')
console.log(`Olá, ${nome}!`)
rl.close()
```

**Conceitos novos:**
- `import` — sistema de módulos ES (requer `"type": "module"` no `package.json`)
- `await` — pausa a execução até o usuário digitar e pressionar Enter
- Template literals `` `Olá, ${nome}!` `` — forma moderna de interpolar variáveis em strings

---

## ex009.js — Funções e Conversão de Tipos

**Conceito:** funções, `Number()`, armadilha da concatenação

Demonstra um erro clássico: somar duas strings em vez de dois números.

```js
// Problema: "1" + "2" = "12" (concatenação de strings)
const soma = numero1 + numero2

// Solução: converter para Number antes de operar
const somaCorreta = Number(numero1) + Number(numero2)
```

Também introduz funções com `return`:

```js
function somaNumeros(num1, num2) {
    return num1 + num2
}
```

**Regra:** todo valor recebido via `readline` chega como `String`. Sempre converta com `Number()` antes de fazer cálculos.

---

## ex010-menu.js — Menu Interativo

**Conceito:** loop infinito, `break`, estrutura de menus em terminal

Combina tudo visto até agora em um programa com menu que fica rodando até o usuário escolher sair.

```js
while (true) {
    const opcao = await rl.question('Escolha uma opção: ')

    if (opcao === '1') { /* soma */ }
    else if (opcao === '2') { /* verifica idade */ }
    else if (opcao === '3') { break }  // encerra o loop
    else { console.log('Opção inválida') }
}
```

**Destaque:** o `break` é o único jeito de sair de um `while (true)` — sem ele, o programa rodaria para sempre.

---

## ex011-api.js — Consumo de API (ViaCEP)

**Conceito:** `fetch`, `async/await`, API REST, JSON

O exercício mais avançado: faz uma requisição HTTP para uma API externa e exibe os dados retornados.

```js
async function consultarCEP(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    let resultado = await fetch(url)       // faz a requisição HTTP
    let dados = await resultado.json()     // converte a resposta para objeto JS
    return dados
}
```

**Fluxo completo:**
1. Usuário digita um CEP
2. O programa monta a URL da API
3. `fetch` faz a requisição GET
4. A resposta JSON é convertida em objeto JavaScript
5. Os campos (`logradouro`, `bairro`, `uf`, etc.) são exibidos no terminal

**Síncrono vs Assíncrono resumido:**

| | Síncrono | Assíncrono |
|---|---|---|
| Comportamento | Trava esperando | Continua e avisa quando termina |
| Sintaxe moderna | — | `async function` + `await` |
| Analogia | Fila de banco | Senha de restaurante |

---

## README.md

Arquivo de documentação inicial do projeto com tópicos a cobrir na revisão:

- O que é JavaScript?
- O que é Node.js?
- Criar pasta e arquivo `.js`

---

## Progressão de Aprendizado

```
ex001  →  ex002  →  ex003  →  ex004  →  ex005  →  ex006
saída    variáveis  if/else   loops     arrays    objetos

ex007  →  ex008  →  ex009  →  ex010       →  ex011
forEach  readline  funções   menu interativo  API externa
```

Cada arquivo adiciona exatamente um conceito novo sobre o anterior, formando uma trilha linear e progressiva de JavaScript básico ao consumo de APIs.
