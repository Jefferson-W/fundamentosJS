// Consultar CEP

import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n======== Consulta de CEP usando a API ViaCEP=================\n');
let cep = await rl.question('Digite o CEP (somente números): ');

let dadosCEP = await consultarCEP(cep);

console.log(`\nInformações do CEP ${dadosCEP.cep}:`);
console.log(`Logradouro: ${dadosCEP.logradouro}`);
console.log(`Complemento: ${dadosCEP.complemento}`);
console.log(`Bairro: ${dadosCEP.bairro}`);
console.log(`Localidade: ${dadosCEP.localidade}`);
console.log(`UF: ${dadosCEP.uf}`);

rl.close(); // Fecha a interface de leitura de linha para liberar recursos

// Função para consultar o CEP usando a API ViaCEP
async function consultarCEP(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    let resultado = await fetch(url)
    let dados = await resultado.json()

    return dados;
}

// Detalhes
// O código consulta informações de um CEP usando a API pública ViaCEP. Aqui está o fluxo:

// 1. Configuração da entrada do usuário


// import readline from "readline/promises";
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// Cria uma interface para ler dados digitados no terminal.

// 2. Leitura do CEP


// let cep = await rl.question('Digite o CEP (somente números): ');
// Pausa o programa e aguarda o usuário digitar um CEP (ex: 01310100).

// 3. Consulta e exibição


// let dadosCEP = await consultarCEP(cep);
// console.log(`Logradouro: ${dadosCEP.logradouro}`);
// // ...
// Chama a função, aguarda o retorno e imprime os campos do endereço.

// 4. A função consultarCEP


// async function consultarCEP(cep) {
//     const url = `https://viacep.com.br/ws/${cep}/json/`;
//     let resultado = await fetch(url);
//     let dados = await resultado.json();
//     return dados;
// }
// Monta a URL com o CEP digitado, faz uma requisição HTTP GET para a API ViaCEP e converte a resposta de JSON para objeto JavaScript.

// Exemplo de resposta da API para o CEP 01310100:


// {
//   "cep": "01310-100",
//   "logradouro": "Avenida Paulista",
//   "bairro": "Bela Vista",
//   "localidade": "São Paulo",
//   "uf": "SP"
// }
// Ponto importante: o código usa await no nível raiz do arquivo, o que só funciona em módulos ES ("type": "module" no package.json ou extensão .mjs).

// ========================  Síncrono vs Assíncrono ======================== 

// Síncrono — uma coisa de cada vez
// O código executa linha por linha, esperando cada operação terminar antes de passar para a próxima.


// console.log("1");
// console.log("2");  // só executa depois que o "1" terminar
// console.log("3");  // só executa depois que o "2" terminar
// // Saída: 1, 2, 3 — sempre nessa ordem
// O problema: se uma operação demorar (ex: buscar dados na internet), o programa trava e não faz mais nada enquanto espera.

// Assíncrono — não trava enquanto espera
// O código inicia uma operação demorada e continua executando outras coisas enquanto aguarda a resposta.


// console.log("1 - início");

// fetch("https://viacep.com.br/ws/01310100/json/")  // inicia a requisição...
//   .then(res => res.json())
//   .then(dados => console.log("3 - dados chegaram:", dados.logradouro));

// console.log("2 - continua enquanto espera");
// // Saída: 1, 2, 3 — o "2" sai ANTES dos dados chegarem
// async/await — sintaxe mais legível para assíncrono
// É a forma moderna de escrever código assíncrono, parecendo síncrono:


// async function consultarCEP(cep) {
//     // await "pausa" só essa função, o resto do programa continua
//     let resultado = await fetch(url);  // espera a requisição
//     let dados = await resultado.json(); // espera converter para JSON
//     return dados;
// }
// No seu código:


// let dadosCEP = await consultarCEP(cep);  // aguarda a API responder
// console.log(dadosCEP.logradouro);         // só executa depois
// Analogia prática
// Síncrono	Assíncrono
// Atendente de lanchonete	Faz um pedido por vez, a fila para	Anota vários pedidos e entrega conforme ficam prontos
// No código	Trava esperando a API	Continua executando, avisa quando a API responder
// O await do seu código diz: "espera a API responder antes de continuar", mas sem travar o processo inteiro do Node.js.