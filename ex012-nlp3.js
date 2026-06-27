// Exercicio de NLP

import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let positivas = ["bom", "ótimo", "excelente", "maravilhoso", "fantástico", "incrível", "positivo", "agradável", "satisfatório", "feliz"];
let negativas = ["ruim", "péssimo", "horrível", "terrível", "desagradável", "negativo", "insatisfatório", "triste", "decepcionante", "lamentável"];

function classificarSentimento(texto) {
    let palavras = texto.toLowerCase().split(/\W+/);
    let score = 0;

    for (let palavra of palavras) {
        if (positivas.includes(palavra)){
            score++
        }
        if (negativas.includes(palavra)){
            score--
        }
    }

    if (score > 0){
        return "Positivo";
    }else if (score < 0){
        return "Negativo";
    }else{
        return "Neutro";
    }
}

while(true){
    let textoUsuario = await rl.question('Digite um texto para classificar o sentimento (ou "sair" para encerrar): ');
    if (textoUsuario.toLowerCase() === "sair") {
        console.log("Encerrando o programa...");
        break;
    }
    console.log("Sentimento:", classificarSentimento(textoUsuario));
}

rl.close()
