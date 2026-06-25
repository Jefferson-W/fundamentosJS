// Menu interativo

import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

while (true) {
    console.log('\n=========== ** MENU ** ============');
    console.log('1. Somar números');
    console.log('2. Verificar idade');
    console.log('3. Sair');

    const opcao = await rl.question('\n\nEscolha uma opção: ');

    if (opcao === '1') {
        console.log('\n ➕ Você escolheu somar números.');
        const numero1 = await rl.question('Digite o primeiro número: ');
        const numero2 = await rl.question('Digite o segundo número: ');
        const soma = Number(numero1) + Number(numero2);
        console.log(`✅ A soma dos números é: ${soma}`);
    } else if (opcao === '2') {
        console.log('\n 🔍 Você escolheu verificar idade.');
        const idade = await rl.question('Digite sua idade: ');
        if (Number(idade) >= 18) {
            console.log('✅ Você é maior de idade.');
        } else {
            console.log('❌ Você é menor de idade.');
        }
    } else if (opcao === '3') {
        console.log(' Saindo do programa...');
        break; // Sai do loop e encerra o programa
    }else {
        console.log('❌ Opção inválida. Tente novamente.');
    }

}

rl.close(); // Fecha a interface de leitura de linha para liberar recursos