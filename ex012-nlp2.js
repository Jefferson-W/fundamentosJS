// Exercicio de NLP

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
    console.log('score:', score);
}

let texto = "O filme foi excelente, muito bom, mas o final foi decepcionante e ruim.";
classificarSentimento(texto);
classificarSentimento(texto);