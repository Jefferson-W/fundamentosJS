// Pedir ao usuário para digitar 2 números e exibir a soma deles no terminal
import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numero1 = await rl.question('Digite o primeiro número: ');
const numero2 = await rl.question('Digite o segundo número: ');

const soma = numero1 + numero2; // Aqui, a soma está concatenando strings, não somando números
console.log(`A soma dos números é: ${soma}`); // Exibe a soma no terminal

const somaCorreta = Number(numero1) + Number(numero2); // Converte as strings para números antes de somar
let resultado = somaNumeros(Number(numero1), Number(numero2)); // Chama a função para somar os números
console.log(`A soma correta dos números é: ${resultado}`); // Exibe a soma correta no terminal

rl.close(); // Fecha a interface de leitura de linha para liberar recursos


// ======================= FUNÇÕES
function somaNumeros(num1, num2) {
    const soma = num1 + num2;
    return soma;
}