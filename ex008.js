// Usando readline para receber dados do usuário
import readline from 'readline/promises'; // para usar o await

// Essas linhas criam uma interface de leitura de linha (readline interface) para interagir com o usuário via terminal:

// const rl = readline.createInterface({
//   input: process.stdin,   // lê entrada do teclado (stdin = standard input)
//   output: process.stdout  // escreve saída no terminal (stdout = standard output)
// });

// readline é um módulo nativo do Node.js para ler dados linha por linha
// process.stdin representa o teclado — é de onde vem o que o usuário digita
// process.stdout representa o terminal — é para onde vai o texto exibido
// O objeto rl resultante é usado depois para fazer perguntas ao usuário com rl.question(...) ou ler linhas com rl.on('line', ...)
// Em resumo: prepara o programa para receber e exibir input interativo no terminal.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nome = await rl.question('Qual é o seu nome? '); // pergunta ao usuário e espera a resposta
console.log(`Olá, ${nome}!`); // exibe a resposta do usuário no terminal
rl.close(); // fecha a interface de leitura de linha para liberar recursos