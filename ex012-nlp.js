// Exercicio de NLP

let positivas = ["bom", "ótimo", "excelente", "maravilhoso", "fantástico", "incrível", "positivo", "agradável", "satisfatório", "feliz"];
let negativas = ["ruim", "péssimo", "horrível", "terrível", "desagradável", "negativo", "insatisfatório", "triste", "decepcionante", "lamentável"];

function classificarSentimento(texto) {
    let palavras = texto.toLowerCase().split(/\W+/);
    // let palavras = texto.toLowerCase().split(/\P{L}+/u); // Corrige o erro de acentos
    let score = 0;

    console.log('palavras:', palavras);
    console.log('score:', score);
}

let texto = "O filme foi ótimo, mas o final foi decepcionante.";
classificarSentimento(texto);